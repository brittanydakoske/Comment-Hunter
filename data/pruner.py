from models import Stock
from sqlalchemy import delete
from datetime import datetime, timedelta
from crud import Session

while True:
    s = Session()
    cut_off = datetime.now() - timedelta(hours=12)
    s.execute(delete(Stock).where(Stock.date < cut_off))
    s.commit()
    s.close()
    print('hi')
    time.sleep(10)