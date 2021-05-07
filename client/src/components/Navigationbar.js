import menu from '../images/menu.png';
import React, { useState } from 'react';

function Navigationbar({sunGraph, bubbleGraph, set1hr, set12hr, set24hr}) {

const [visible, setVisible] = useState(false);
const [visibleStyle, setVisibleStyle] = useState({visibility: "hidden"});
const [menuStyle, setMenuStyle] = useState({position: "static"});

const changeVisibility = () => {
    if (visible === false) {
        setVisible(true);
        setVisibleStyle({visibility: "visible"});
        setMenuStyle({position: "fixed"});
    } else {
        setVisible(false);
        setVisibleStyle({visibility: "hidden"});
        setMenuStyle({position: "static"});
    }
}

return (
    <div className="navbar">
        
        <div className="menu item-1">
            <img alt={""} className="menu-icon" style={menuStyle} src={menu} onClick={changeVisibility}/>
        </div>
        <h1 className="item-2 font-face-arv">Comment Hunter</h1>
        <div className="menu item-1"></div>
        <div className="sidebar" style={visibleStyle}>
            <div className="topside">
                <h2 className="config-header">Configurations</h2>
            </div>
            <div className="bottomside">

                <div className="config-label">
                    <p>Graph Display:</p>
                </div>

                <div className="radio-select">
                    <label>Sunburst</label>
                    <input className="radio" type="radio" value="sunburst" name="graphs" onClick={sunGraph} defaultChecked />
                </div>

                <div className="radio-select">
                    <label>BubbleChart</label>
                    <input className="radio" type="radio" value="bubble" name="graphs" onClick={bubbleGraph} />
                </div>

                <br />

                <div className="config-label">
                    <p>Time Display:</p>
                </div>

                <div className="radio-select">
                    <label>1 hr</label>
                    <input className="radio" type="radio" value="1hr" name="time" onClick={set1hr} />
                </div>

                <div className="radio-select">
                    <label>12 hrs</label>
                    <input className="radio" type="radio" value="12hrs" name="time" onClick={set12hr}/>
                </div>

                <div className="radio-select">
                    <label>24 hrs</label>
                    <input className="radio" type="radio" value="24hrs" name="time" onClick={set24hr} defaultChecked/>
                </div>   
 
            </div>
        </div>
    </div>
  );
}

export default Navigationbar;
