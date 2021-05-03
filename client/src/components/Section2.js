import rdt from '../images/sec2scrape.jpg';

function Section2() {
  return (
      <div className="section">
        <div className="item img-sec">
          <img alt={""} className="imgSection" src={rdt}></img>
        </div>
        <div className="item text-sec">
          <h2>Visualizing and analyzing wall street bets</h2>
          <p>The graphics data being rendered for this project consists of finding mentions regarding wall street bets. Because this topic is an excellent example that is often mentioned over reddit on a daily basis, scrapping data over this topic is an excellent example to build a data scrapper around it for this particular project.</p>
        </div>
      </div>
  );
}

export default Section2;
