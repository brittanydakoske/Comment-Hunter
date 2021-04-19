# config.py #
from decouple import config

# this is the test database #
DATABASE_URI = config('DEV_DATABASE_URI')
