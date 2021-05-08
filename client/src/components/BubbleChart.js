import React from "react";
import * as d3 from "d3";

class BubbleChart extends React.Component {
  static defaultProps = {
    data: [],
    useLabels: true,
    width: 600,
    height: 400,
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.data.length > 0) {
      this.minValue =
          0.95 *
          d3.min(this.props.data, (item) => {
            return item.v;
          });

      this.maxValue =
          1.05 *
          d3.max(this.props.data, (item) => {
            return item.v;
          });

      this.simulatePositions(nextProps.data);
    }
  }

  constructor(props) {
    super(props);

    this.minValue = 1;
    this.maxValue = 100;
    this.mounted = false;

    this.state = {
      data: []
    };

    this.radiusScale = this.radiusScale.bind(this);
    this.simulatePositions = this.simulatePositions.bind(this);
    this.renderBubbles = this.renderBubbles.bind(this);
  }

  componentWillMount() {
    this.mounted = true;
  }

  componentDidMount() {
    if (this.props.data.length > 0) {
      this.minValue =
        0.95 *
        d3.min(this.props.data, (item) => {
          return item.v;
        });

      this.maxValue =
        1.05 *
        d3.max(this.props.data, (item) => {
          return item.v;
        });

      this.simulatePositions(this.props.data);
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  radiusScale = (value) => {
    const fx = d3
      .scaleSqrt()
      .range([1, 100])
      .domain([this.minValue, this.maxValue]);

    return fx(value) > 0 ? fx(value) : 0;
  };
  simulatePositions = (data) => {
    this.simulation = d3
      .forceSimulation()
      .nodes(data)
      .velocityDecay(0.5)
      .force("x", d3.forceX().strength(0.05))
      .force("y", d3.forceY().strength(0.05))
      .force(
        "collide",
        d3.forceCollide((d) => {
          return this.radiusScale(d.v) + 2;
        })
      )
      .on("tick", () => {
        if (this.mounted) {
          this.setState({ data });
        }
      });
  };

  renderBubbles = (data) => {
    const minValue =
      0.95 *
      d3.min(data, (item) => {
        return item.v;
      });

    const maxValue =
      1.05 *
      d3.max(data, (item) => {
        return item.v;
      });

    const color = d3
      .scaleLinear()
      .domain([minValue, maxValue])
      .interpolate(d3.interpolateHcl)
      .range(["#67eff4", "#2b2dd4"]); //change colors inside the parameter of range referring to a color wheel

    // render simple circle element
    if (!this.props.useLabels) {
      const circles = data.map((item, index) => {
        return (
          <circle
            key={index}
            r={this.radiusScale(item.v)}
            cx={item.x}
            cy={item.y}
            fill={color(item.v)}
            stroke={d3.rgb(color(item.v)).brighter(2)}
            strokeWidth="2"
          />
        );
      });

      return (
        <g
          transform={`translate(${this.props.width / 2}, ${
            this.props.height / 2
          })`}
        >
          {circles}
        </g>
      );
    }

    // render circle and text elements inside a group
    const texts = data.map((item, index) => {
      var textLabel = item.k.toUpperCase(); //setting the up key name into a variable
      const props = this.props;
      const fontSize = this.radiusScale(item.v) / 2;
      return (
        <g
          key={index}
          transform={`translate(${props.width / 2 + item.x}, ${
            props.height / 2 + item.y
          })`}
        >
          <circle
            r={this.radiusScale(item.v)}
            fill={color(item.v)}
            stroke={d3.rgb(color(item.v)).brighter(2)}
            strokeWidth="2"
          />
          <text
            dy="6"
            fill="#fff"
            textAnchor="middle"
            fontSize={`${fontSize}px`}
            fontWeight="bold"
          >
            {/* {Here in the bottom textlabel is retrieving the name of key object into a bubble} */}
            {/* {item.v} */}
            {textLabel} 
          </text>
        </g>
      );
    });

    return texts;
  };

  render() {
    return (
      <div>
        <h3>D3 Bubble Chart With react rendering</h3>
        <div id="chart">
          <svg width={this.props.width} height={this.props.height}>
            {this.renderBubbles(this.state.data)}
          </svg>
        </div>
      </div>
    );
  }
}
export default BubbleChart;

/**
 * Copyright (c) 2021 by Jackfiallos (https://codepen.io/Jackfiallos/pen/jLWrjb)
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is furnished to do
 * so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
