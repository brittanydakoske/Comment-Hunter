import menu from '../images/menu.png';
import React, { useCallback, useState } from 'react';
import { Hidden } from '@material-ui/core';
import { style } from 'd3-selection';
// import {ReactComponent as Menu} from '../images/menu.svg'

function Navigationbar({sunGraph, bubbleGraph, set1hr, set1day, set1week}) {

const [visible, setVisible] = useState(false);
const [visibleStyle, setVisibleStyle] = useState({visibility: "hidden"})

const changeVisibility = () => {
    if (visible === false) {
        setVisible(true);
        setVisibleStyle({visibility: "visible"});
        console.log(visible);
    } else {
        setVisible(false);
        setVisibleStyle({visibility: "hidden"});
        console.log(visible);
    }
}

// var visibleStyle = { visibility: "hidden" }; 
// if (!visible) style.visibility = "visible";

return (
    <div className="navbar">
     
        <img className="menu item-1" src={menu} onClick={changeVisibility}></img>
        <h1 className="item-2">Comment Hunter</h1>
        <div className="sidebar" style={visibleStyle}>
            <div className="topside">
                {/* <img className="menu item-1" src={menu} onClick={}></img> */}
                <h2>Configurations</h2>
            </div>
            <div className="bottomside">

                <label for="sunburst">Sunburst</label>
                <input type="radio" value="sunburst" name="graphs" onClick={sunGraph} defaultChecked />

                <label for="bubble">BubbleChart</label>
                <input type="radio" value="bubble" name="graphs" onClick={bubbleGraph} />

                <br />

                <label for="1hr">1 hr</label>
                <input type="radio" value="1hr" name="time" onClick={set1hr} />

                <label for="sunburst">24 hrs</label>
                <input type="radio" value="24hrs" name="time" onClick={set1day}/>

                <label for="sunburst">1 week</label>
                <input type="radio" value="1week" name="time" onClick={set1week} defaultChecked/>
 
            </div>
        </div>
        
        {/* <div className="menu">
            
        </div> */}
        
        

    </div>
  );
}

export default Navigationbar;