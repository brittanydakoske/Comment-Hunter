import React from 'react';
import {get1hr, get1day, get1week} from "../api/request";

export const SelectTimeFrame = () => {
    const [data, setData] = React.useState(0);

    const CallUseEffect = () => {
        React.useEffect(() => {
            get1week().then( res => setData( res.data ))
        },[]);
    }

    const set1hr = () =>  
        get1hr().then( res => setData(res.data))

    const set1day = () => {
        get1day().then( res => setData(res.data))
    }

    const set1week = () => {
        get1week().then( res => setData( res.data ))
    }

    return {data, CallUseEffect ,set1hr, set1day, set1week}
};