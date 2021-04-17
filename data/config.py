# config.py #
from decouple import config

# this is the test database #
DATABASE_URI = config('TEST_DATABASE_URI')
