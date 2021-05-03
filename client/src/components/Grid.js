import icon from '../images/wsbet.jpg';
import stock1 from '../images/stonks.jpg';
import stock2 from '../images/stonks2.jpg';
import crypto from '../images/crypto.jpg';
const cols = [
    {
        id: 1,
        image: stock1,
        description: 'blah blah blah'
    }, 
    {
        id: 2,
        image: crypto,
        description: 'blah blah blah'
    },
    {
        id: 3,
        image: stock2,
        description: 'blah blah blah'
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