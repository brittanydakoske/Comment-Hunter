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

        {/*Warning: Each child in a list should have a unique "key" prop.*/}
        {cols.map((prop, i) => (<div className="column" key={i}><img src={prop.image} alt={''}/><p>{prop.description}</p></div>))}

    </div>
  );
}

export default Grid;
