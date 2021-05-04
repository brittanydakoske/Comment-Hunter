# config.py #
from decouple import config

# this is the test database #
DATABASE_URI = config('DATABASE_URL').replace("://", "ql://", 1)
