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
  console.log("SUNBURST_TEST");
  console.log(event);
};

function App() {
  const {chart, sunGraph, bubbleGraph} = SelectChart();
  const {data, set1hr, set1day, set1week, CallUseEffect} = SelectTimeFrame();

  CallUseEffect();

  var reDraw;

  if(data != 0) {
    reDraw = data.map(v => ({
      v: v.values,
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
           { chart === 'Sunburst' ?          
              <Sunburst
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
        
        <h2>Analyzing data efficiently</h2>
        <Grid />
        <Section1 />
        <Section2 />
        
        <div className="about">
          <h2>Team Members</h2>
          <p>Comment hunter is a collaborative project created by CSUN Computer Science students. The project involved several parts which required seperate work to be split among a group. The following slider shows each team member that worked within this project along with different roles that every member contributed seperately. </p>
        </div>

        <Slider />

        <footer>
          <p>Copyright Â© 2021 Comment Hunter - All Rights Reserved.</p>
        </footer>
      </div>
  );
}

export default App;
