import React from 'react';
import {get1hr, get12hr, get24hr} from "../api/request";

export const SelectTimeFrame = () => {
    const [data, setData] = React.useState(0);

    const CallUseEffect = () => {
        React.useEffect(() => {
            get24hr().then( res => setData( res.data ))
        },[]);
    }

    const set1hr = () =>  
        get1hr().then( res => setData(res.data))

    const set12hr = () => {
        get12hr().then( res => setData(res.data))
    }

    const set24hr = () => {
        get24hr().then( res => setData( res.data ))
    }

    return {data, CallUseEffect ,set1hr, set12hr, set24hr}
};
