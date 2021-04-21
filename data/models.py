# models.py #

from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, TIMESTAMP, DateTime

Base = declarative_base()


class Stock(Base):
    __tablename__ = 'Stocks'
    id = Column(Integer, primary_key=True)
    ticker = Column(String)
    name = Column(String)
    sector = Column(String)
    date = Column(DateTime(timezone=True))

    def __repr__(self):
        return "<Book(ticker='{}', name='{}', sector={}, date={})>" \
            .format(self.ticker, self.name, self.sector, self.date)
