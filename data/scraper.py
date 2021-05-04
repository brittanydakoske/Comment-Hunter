# scraper.py #

import praw
from datetime import datetime
from sqlalchemy.orm import declarative_base
from crud import recreate_database, Session
from models import Stock
import xml.etree.ElementTree as ET

def generateStock(ticker, name, sector):
    return Stock(
        ticker=ticker,
        name=name,
        sector=sector,
        date=datetime.now()
    )

# Create Reddit Instance
reddit = praw.Reddit(
    user_agent="Comment Extraction (by u/comment-hunter)",
    client_id="aPchqxNlshTm4Q",
    client_secret="4FQsfVHmzXGhVj4woZ6y1BlzMrcJjg",
    username="comment-hunter",
    password="Comp380_2021",
)
subreddit = reddit.subreddit("wallstreetbets")

# Parse XML File
tree = ET.parse("StockListComplete.xml")
root = tree.getroot()

Base = declarative_base()
recreate_database()  # Testing
s = Session()

for comment in subreddit.stream.comments(skip_existing=True):
    print(comment.body + "\n")
    records = root.findall('record')
    if len(records) > 0:
        for record in root.findall('record'):
            tickers = list(record.iter('StockTicker'))
            fullnames = list(record.iter('StockFullname'))
            sectors = list(record.iter('StockSector'))
            if len(tickers) > 0:
                ticker = tickers[0].text
            else:
                ticker = ''
            if len(fullnames) > 0:
                fullname = fullnames[0].text
            else:
                fullname = ''
            if len(sectors) > 0:
                sector = sectors[0].text
            else:
                sector = ''
            if (ticker != '' and ticker in comment.body.split()) or (fullname != '' and fullname in comment.body):
                print(comment.body)
                print(ticker, fullname, sector)
                print("\n\n\n")
                # insert
                new_stock = generateStock(ticker, fullname, sector)
                s.add(new_stock)
                s.commit()
s.close()
