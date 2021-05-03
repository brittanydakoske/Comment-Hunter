import React from 'react';

export const SelectChart = () => {
    const [chart, setChart] = React.useState('Sunburst');

    const sunGraph = () => {
        setChart('Sunburst');
    }

    const bubbleGraph = () => {
        setChart('Bubblechart')
    }

    return {chart, sunGraph, bubbleGraph}
};