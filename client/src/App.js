import {useEffect} from "react";
import {get1hr, get1day, get1week} from "./api/request";

import React, { Component } from 'react';
import Sunburst from 'react-sunburst-d3-v4';
import BubbleChart from "./components/BubbleChart";
import SunburstData from './components/data1';
import {bubbleData} from  './components/data2';
import Navbar from './components/Navbar';
import './styles/App.css'; //styles/App.css ok

// function App() {

//   onSelect((event) => {
//     //console.log(event);
//   }, );

//   reDraw = bubbleData.map(v => ({
//     v: v.values,
//     k: v.keys
//   }));

//   useEffect(() => {
//     get1hr().then( res => console.log( res.data ) )
//     get1day().then( res => console.log( res.data ) )
//     get1week().then( res => console.log( res.data ) )
//   }, []);

//   return (
//     <div className="App">
//       <h1>Comment Hunter</h1>
//       <div className="graph-container">
//           <BubbleChart data={this.reDraw} useLabels />
//           {/* <Sunburst
//           data={SunburstData}
//           onSelect={this.onSelect}
//           scale="linear" // or exponential
//           tooltipContent={<div class="sunburstTooltip"  />} // eslint-disable-line
//           tooltip
//           tooltipPosition="right"
//           keyId="anagraph"
//           width="580"
//           height="500"
//         /> */}
//         </div>
//     </div>
//   );
// }

// export default App;


//This class needs to be convertet to a function or hook instead
//reDraw is giving issues if using hooks. Just needs to be rewritten.

class App extends Component {
  // onSelect(event){
  //   //console.log(event);
  // }

  reDraw = bubbleData.map(v => ({
    v: v.values,
    k: v.keys
  }));


  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}
        <h1>Hello from React</h1>
        
        <div className="graph-container">
          <BubbleChart data={this.reDraw} useLabels />
          {/* <Sunburst
          data={SunburstData}
          onSelect={this.onSelect}
          scale="linear" // or exponential
          tooltipContent={<div class="sunburstTooltip"  />} // eslint-disable-line
          tooltip
          tooltipPosition="right"
          keyId="anagraph"
          width="580"
          height="500"
        /> */}
        </div>
        
      </div>
    );
  }
}

export default App;
