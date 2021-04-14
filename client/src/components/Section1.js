import icon from './images/wsbet.jpg';



function Section1() {

  return (
      <div className="section">
        <div className="section-left">
          <h2>A data scraper that presents data efficiently</h2>
          <p>Comment Hunter was designed with the purpose of allowing users to track mentions of certain keywords from any particular sub Reddit. Therefore, the application is developed to retireve information and present the data broken down into a graph that users will be able to understand and analyze.</p>
        </div>
        <img className="section-right" src={icon}></img>
      </div>
  );
}

export default Section1;