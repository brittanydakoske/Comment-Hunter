import menu from '../images/menu.png';
import React from 'react';
// import {ReactComponent as Menu} from '../images/menu.svg'

function Navigationbar({sunGraph, bubbleGraph}) {



return (
    <div className="navbar">
     
        <img className="menu item-1" src={menu}></img>
        <h1 className="item-2">Comment Hunter</h1>
        <div className="sidebar">
            <div className="topside">
                <img className="menu item-1" src={menu}></img>
                <h2>Configurations</h2>
            </div>
            <div className="bottomside">

                <label for="sunburst">Sunburst</label>
                <input type="radio" value="sunburst" name="graphs" onClick={sunGraph} defaultChecked />

                <label for="bubble">BubbleChart</label>
                <input type="radio" value="bubble" name="graphs" onClick={bubbleGraph} />

                <br />

                <label for="1hr">1 hr</label>
                <input type="radio" value="1hr" name="time" defaultChecked />

                <label for="sunburst">24 hrs</label>
                <input type="radio" value="24hrs" name="time" />

                <label for="sunburst">1 week</label>
                <input type="radio" value="1week" name="time" />
 
            </div>
        </div>
        
        {/* <div className="menu">
            
        </div> */}
        
        

    </div>
  );
}

export default Navigationbar;