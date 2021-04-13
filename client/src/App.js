import {useEffect} from "react";
import {get1hr, get1day, get1week} from "./api/request";

function App() {
  useEffect(() => {
    get1hr().then( res => console.log( res.data ) )
    get1day().then( res => console.log( res.data ) )
    get1week().then( res => console.log( res.data ) )
  }, []);

  return (
    <div>
      Comment-Hunter
    </div>
  );
}

export default App;
