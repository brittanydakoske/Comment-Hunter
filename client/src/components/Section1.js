import users from '../images/sec1users.jpg';

function Section1() {
  return (
      <div className="section">
        <div className="item text-sec">
          <h2>Data Extraction with Intelligent Visualization</h2>
          <p>Comment Hunter was designed to search subreddits for mentions of keywords and then present its findings in a sleek, easily comprehensible presentation. Users can choose between three different timeframes for the search window and select the graph style that best expresses the data.</p>
        </div>
        <div className="item img-sec">
          <img alt={""} className="imgSection" src={users}></img>
        </div>
      </div>
  );
}

export default Section1;
