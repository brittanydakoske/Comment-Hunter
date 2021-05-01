import {useEffect, useState} from "react";
import {get1week} from "./api/request";

import React from 'react';
import Sunburst from 'react-sunburst-d3-v4';
import BubbleChart from "./components/BubbleChart";
import SunburstData from './components/data1';
import {bubbleData} from  './components/data2';
import './styles/App.css'; //styles/App.css ok
import Navbar from "./components/Navbar";
import Navigationbar from "./components/Navigationbar";

const onSelect = (event) => {
  console.log(event);
};

function App() {
  const [chart, setChart] = useState( 'Sunburst' );
  const [data, setData] = useState("just an example");


  /* check the console, you will see that the initial state
  * "just an example" shows up first. Then the function useEffect
  * fires and the api request is made to the server but it takes
  * a second which is why you see "just an example" show up first.
  *
  * So now we can access the data from the api request using data.
  * data acts just like a variable name BUT it is imutable and cant be changed
  * like you cant do data = "something"
  * it wont work, you can only set it with setData
  * think of it like getters and setters in object oriented programming.
  *
  * Also every time setData is used and state "data" is changed, EVERY component that
  * uses data as a prop or whatever will also update so these changes will happen
  * right away across the app.
  */

  useEffect(() => {
    get1week().then( res => setData( res.data ) )
  },[]);

  console.log(data)

  
  var reDraw = data.map(v => ({
    v: v.values,
    k: v.ticker, 
  }));


  return (
      <div className="App">
        
        <Navigationbar setChart={setChart}/>
        {/* <Navbar/> */}
        <div className="graph-container">

          {/*You can say, if "chart" (state) us "sunburst, show the Sunburst graph*/}
          {/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator*/}
          {/*You have to use ternary operator in this case tho, no if statements. */}
          {/*They just wont work, its a funky thing about JSX*/}

          { chart === 'Sunburst' ?
              <Sunburst
                  data={SunburstData}
                  onSelect={ onSelect }
                  scale="linear" // or exponential
                  tooltipContent={<div class="sunburstTooltip"  />} // eslint-disable-line
                  tooltip
                  tooltipPosition="right"
                  keyId="anagraph"
                  width="580"
                  height="500"
              />
              : <BubbleChart data={reDraw} useLabels />
          }

        </div>


      </div>
  );
}

export default App;
