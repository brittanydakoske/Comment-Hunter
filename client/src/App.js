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
import {SelectChart} from "./components/selectChart";
import {SelectTimeFrame} from "./components/selectTimeFrame";
import Grid from "./components/Grid.js";
import Section1 from "./components/Section1.js";
import Section2 from "./components/Section2.js";
import Slider from "./components/Slider.js";
import {dataFormat, sampleData} from "./components/dataFormat.js";

const onSelect = (event) => {
  console.log("SUNBURST_TEST");
  console.log(event);
};

function App() {
  // const [chart, setChart] = useState( 'Sunburst' );
  const {chart, sunGraph, bubbleGraph} = SelectChart();
  const {data, set1hr, set1day, set1week, CallUseEffect} = SelectTimeFrame();
  // const [data, setData] = useState("just an example");


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

  // useEffect(() => {
  //   get1week().then( res => setData( res.data ) )
  // },[]);

  CallUseEffect();

 

  //Joseph can adjust this to the name of the keys of the data
  var reDraw;

  if(data != 0) {
    reDraw = data.map(v => ({
      v: v.values,
      // k: v.keys
      k: v.ticker
    }));
  }
  return (
      <div className="App">
        
        <Navigationbar 
          sunGraph={sunGraph} 
          bubbleGraph={bubbleGraph}
          set1hr = {set1hr}
          set1day = {set1day}
          set1week = {set1week} 
        />
        {/* <Navbar/> */}
        <div className="graph-container">

          {/*You can say, if "chart" (state) us "sunburst, show the Sunburst graph*/}
          {/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator*/}
          {/*You have to use ternary operator in this case tho, no if statements. */}
          {/*They just wont work, its a funky thing about JSX*/}

          {/* {console.log(data)}
          {console.log(chart)} */}

           { chart === 'Sunburst' ?          
              <Sunburst
                   //data={SunburstData}
                  data={dataFormat(data)}
                  onSelect={ onSelect }
                  scale="linear" // or exponential
                  tooltipContent={<div class="sunburstTooltip"  />} // eslint-disable-line
                  tooltip
                  tooltipPosition="right"
                  keyId="anagraph"
                  width="580"
                  height="500"            
              />          
              : 
              reDraw ? <BubbleChart data={reDraw} useLabels /> : "" 
             
          } 
        </div>
        
        <hr></hr>
        <h2>Analyzing Data Efficiently</h2>
        <Grid />
        <Section1 />
        <Section2 />
        
        <hr></hr>
        <div className="about">
          <h2>Team Members</h2>
          <p>Comment Hunter is a collaborative project created by a group of Computer Science students at the California State University at Northridge. Below is a list of team members along with their individual responsibilities and contributions to the project.</p>
        </div>

        <Slider />

        <footer>
          <p>Copyright Â© 2021 Comment Hunter - All Rights Reserved.</p>
        </footer>
      </div>
  );
}

export default App;
