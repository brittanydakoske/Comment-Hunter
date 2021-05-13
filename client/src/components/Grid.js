import charts from '../images/graphs.png';
import menu from '../images/usermenu.png';
import sunchart from '../images/sunchart.png';
const cols = [
    {
        id: 1,
        image: charts,
        description: 'Visualize the data more accurately through different types of graphics.'
        
    }, 
    {
        id: 2,
        image: menu,
        description: 'Customize the graphics and the time frame by clicking on the menu at the top left of the page.'
    },
    {
        id: 3,
        image: sunchart,
        description: 'Click on the Sunburst chart to interact with the different stock categories.'
    }
]

function Grid() {

return (

    <div className="row">
        {cols.map((prop) => (<div className="column"><img src={prop.image}></img><p>{prop.description}</p></div>))}
    </div>
  );
}

export default Grid;
