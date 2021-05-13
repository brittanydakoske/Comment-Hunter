# crud.py #
from sqlalchemy import create_engine
from config import DATABASE_URI
from models import Base
from sqlalchemy.orm import sessionmaker


def recreate_database():
    Base.metadata.drop_all(engine)
    Base.metadata.create_all(engine)


engine = create_engine(DATABASE_URI)
Session = sessionmaker(bind=engine)
