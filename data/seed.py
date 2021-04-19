# seed.py #
import string
from datetime import datetime, timedelta
from crud import recreate_database, Session
from models import Stock
import random
from random_word import RandomWords


def generateDate(days_to_subtract):
    return (datetime.now() - timedelta(days=days_to_subtract)).isoformat()


def generateStock(ticker, name, sector, days_to_subtract):
    return Stock(
        ticker=ticker,
        name=name,
        sector=sector,
        date=generateDate(days_to_subtract)
    )


recreate_database()
s = Session()

sectorList = [
    "Energy",
    "Materials",
    "Industrials",
    "Utilities",
    "Healthcare",
    "Financials",
    "Consumer Discretionary",
    "Consumer Staples",
    "Information Technology",
    "Communication Services",
    "Real Estate"
]

r = RandomWords()
stockList = []
for i in range(100):
    letters = string.ascii_lowercase
    ticker = ''.join(random.choice(letters) for i in range(random.randint(0, 4)))

    if len(ticker) == 1 or len(ticker) == 2:
        ticker = ''.join(random.choice(letters) for i in range(random.randint(3, 4)))

    name = r.get_random_word()

    stockList.append(
        {
            "ticker": ticker,
            "name": name,
            "sector": sectorList[random.randint(0, len(sectorList) - 1)]
        }
    )

max_num_of_days_old = 7
for x in range(5000):
    r = random.randint(0, len(stockList) - 1)
    s.add(generateStock(
        stockList[r]["ticker"], stockList[r]["name"], stockList[r]["sector"], random.randint(0, max_num_of_days_old))
    )

s.commit()
s.close()
