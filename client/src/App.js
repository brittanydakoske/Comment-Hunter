import logo from './logo.svg';
import './App.css';
import {getData} from "./api/request";
import {useEffect, useState} from "react";

function App() {
  /* On page load, get data from server and store it in "data"
  * You will notice that console.log( data ) returns an empty array at first
  * and then returns the data. This is because both getData and setData are
  * working asynchronously. */
  const [data, setData] = useState([])
  useEffect(() => {
    getData().then( res => setData( res.data ) )
  }, []);
  console.log( data )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello World
        </a>
      </header>
    </div>
  );
}

export default App;
