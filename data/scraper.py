# scraper.py #

import praw

from sqlalchemy.orm import declarative_base
from crud import recreate_database, Session
import xml.etree.ElementTree as ET
from models import Stock
from sqlalchemy import delete
from datetime import datetime, timedelta
from decouple import config

def generateStock(ticker, name, sector):
    return Stock(
        ticker=ticker,
        name=name,
        sector=sector,
        date=datetime.now()
    )

# global program flag
program_flag = False

def run():
    # turn on the program flag
    global program_flag
    program_flag = True

    # program kill switch
    def signal_handler(number, frame):
        global program_flag
        program_flag = False

    # kill signal handler
    signal.signal(signal.SIGTERM, signal_handler)

    # Create Reddit Instance
    reddit = praw.Reddit(
        user_agent=config('REDDIT_USER_AGENT'),
        client_id=config('REDDIT_CLIENT_ID'),
        client_secret=config('REDDIT_CLIENT_SECRET'),
        username=config('REDDIT_USERNAME'),
        password=config('REDDIT_PASSWORD'),
    )
    subreddit = reddit.subreddit("wallstreetbets")

    # Parse XML File
    tree = ET.parse("StockListComplete.xml")
    root = tree.getroot()

    Base = declarative_base()
    # recreate_database()  # Testing
    s = Session()

    for comment in subreddit.stream.comments(skip_existing=True):

        cut_off = datetime.now() - timedelta(hours=24)
        s.execute(delete(Stock).where(Stock.date < cut_off))

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
                    new_stock = generateStock(ticker, fullname, sector)
                    s.add(new_stock)

        s.commit()
    s.close()

if __name__ == '__main__':
    run()
