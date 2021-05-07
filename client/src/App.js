import React from 'react';
import Sunburst from 'react-sunburst-d3-v4';
import BubbleChart from "./components/BubbleChart";
import './styles/App.css'; //styles/App.css ok
import Navigationbar from "./components/Navigationbar";
import {SelectChart} from "./components/selectChart";
import {SelectTimeFrame} from "./components/selectTimeFrame";
import Grid from "./components/Grid.js";
import Section1 from "./components/Section1.js";
import Section2 from "./components/Section2.js";
import Slider from "./components/Slider.js";
import {dataFormat} from "./components/dataFormat.js";

const onSelect = (event) => {
  // console.log("SUNBURST_TEST");
  // console.log(event);
};

function App() {
  const {chart, sunGraph, bubbleGraph} = SelectChart();
  const {data, set1hr, set12hr, set24hr, CallUseEffect} = SelectTimeFrame();

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
          set12hr = {set12hr}
          set24hr = {set24hr}
        />
        {/* <Navbar/> */}
        <div className="graph-container">

           { chart === 'Sunburst' ?          
              <Sunburst
                  data={dataFormat(data)}
                  onSelect={ onSelect }
                  scale="linear"
                  tooltipContent={<div className="sunburstTooltip"  />}
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
          <p>Copyright © 2021 Comment Hunter - All Rights Reserved.</p>
        </footer>
      </div>
  );
}

export default App;
