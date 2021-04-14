import icon from './images/wsbet.jpg';

const cols = [
    {
        id: 1,
        image: icon,
        description: 'blah blah blah'
    }, 
    {
        id: 2,
        image: icon,
        description: 'blah blah blah'
    },
    {
        id: 3,
        image: icon,
        description: 'blah blah blah'
    }
]

function Grid() {

return (
    <div className="row">
     
     {
        cols.map((prop) => (<div className="column"><img src={prop.image}></img><p>{prop.description}</p></div>))}

    </div>
  );
}

export default Grid;