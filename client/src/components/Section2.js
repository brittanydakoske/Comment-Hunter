import rdt from '../images/sec2scrape.jpg';

function Section2() {
  return (
      <div className="section">
        <div className="item img-sec">
          <img alt={""} className="imgSection" src={rdt}></img>
        </div>
        <div className="item text-sec">
          <h2>Analyzing Wall Street Bets</h2>
          <p>For this demonstration, Comment Hunter is currently searching the subreddit r/wallstreetbets for mentions of stock ticker symbols. Each time a new comment is posted to the subreddit, Comment Hunter checks its contents against a list of stocks and updates the database accordingly. The above graphs show the ten most-mentioned stocks over the user’s selected timeframe.</p>
        </div>
      </div>
  );
}

export default Section2;
