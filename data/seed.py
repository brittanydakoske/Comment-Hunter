# seed.py #
from datetime import datetime, timedelta

from crud import recreate_database, Session
from models import Stock


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

s.add(generateStock("ETSY", "Etsy", "Commercial Services", 0))
s.add(generateStock("ETSY", "Etsy", "Commercial Services", 1))
s.add(generateStock("ETSY", "Etsy", "Commercial Services", 2))
s.add(generateStock("GME", "Game Stop", "Retail", 0))
s.add(generateStock("GME", "Game Stop", "Retail", 1))
s.add(generateStock("GME", "Game Stop", "Retail", 2))
s.add(generateStock("GME", "Game Stop", "Retail", 3))
s.add(generateStock("GME", "Game Stop", "Retail", 4))
s.add(generateStock("GME", "Game Stop", "Retail", 5))
s.add(generateStock("VZ", "Verizon", "Communications", 7))
s.add(generateStock("VZ", "Verizon", "Communications", 8))
s.add(generateStock("VZ", "Verizon", "Communications", 9))

s.commit()
s.close()
