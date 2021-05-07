import React from 'react';
import {isEqual} from 'lodash/lang';
import * as d3 from 'd3';

/** https://github.com/ArbaazDossani/react-zoomable-sunburst-d3-v4/blob/master/example/Sunburst.js
 * MIT License
* Copyright (c) 2017 Arbaaz Dossani
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

class Sunburst extends React.Component {
  componentDidMount() {
    this.renderSunburst(this.props);
  }
  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.props, nextProps)) {
      this.renderSunburst(nextProps);
    }
  }
  arcTweenData(a, i, node, x, arc) {
    const oi = d3.interpolate({
          x0: (a.x0s ? a.x0s : 0),
          x1: (a.x1s ? a.x1s : 0)
        }, a);

    function tween(t) {
      const b = oi(t);
      a.x0s = b.x0;
      a.x1s = b.x1;
      return arc(b);
    }
    if (i === 0) {
      const xd = d3.interpolate(x.domain(), [node.x0, node.x1]);
      return function (t) {
        x.domain(xd(t));
        return tween(t);
      };
    }
    else {
      return tween;
    }
  }
  update(root, firstBuild, svg, partition, hueDXScale, x, y, radius, arc, node, self) {
    if (firstBuild) {
      firstBuild = false;
      function arcTweenZoom(d) {
        const xd = d3.interpolate(x.domain(), [d.x0, d.x1])
        const yd = d3.interpolate(y.domain(), [d.y0, 1])
        const yr = d3.interpolate(y.range(), [d.y0 ? 40 : 0, radius])
        return function (data, i) {
          return i ? () => arc(data) : (t) => {
                x.domain(xd(t));
                y.domain(yd(t)).range(yr(t));
                return arc(data);
              };
        };
      }

      function click(d) {
        node = d;
        self.props.onSelect && self.props.onSelect(d);
        svg.selectAll('path').transition().duration(1000).attrTween('d', arcTweenZoom(d));
      }
      const tooltipContent = self.props.tooltipContent;
      const tooltip = d3.select(`#${self.props.keyId}`)
          .append(tooltipContent ? tooltipContent.type : 'div')
          .style('position', 'absolute')
          .style('z-index', '10')
          .style('opacity', '0');
      if (tooltipContent) {
        Object.keys(tooltipContent.props).forEach((key) => {
          tooltip.attr(key, tooltipContent.props[key]);
        });
      }
      svg.selectAll('path')
          .data(partition(root)
              .descendants())
          .enter()
          .append('path')
          .style('fill', (d) =>
          {
            let hue;
            const current = d;
            if (current.depth === 0) {
              return '#33cccc';
            }
            if (current.depth <= 1) {
              hue = hueDXScale(d.x0);
              current.fill = d3.hsl(hue, 0.5, 0.6);
              return current.fill;
            }
            current.fill = current.parent.fill.brighter(0.5);
            const hsl = d3.hsl(current.fill);
            hue = hueDXScale(current.x0);
            const colorshift = hsl.h + (hue / 4);
            return d3.hsl(colorshift, hsl.s, hsl.l);
          })
          .attr('stroke', '#fff')
          .attr('stroke-width', '1')
          .on('click', d => click(d, node, svg, self, x, y, radius, arc))
          .on('mouseover', function (d) {
            if (self.props.tooltip) {
              d3.select(this).style('cursor', 'pointer');
              tooltip.html(() => {
                const name = utils.formatNameTooltip(d);
                return name;
              });
              return tooltip.transition().duration(50).style('opacity', 1);
            }
            return null;
          })
          .on('mousemove', () => {
            if (self.props.tooltip) {
              tooltip
                  .style('top', `${d3.event.pageY - 50}px`)
                  .style('left', `${self.props.tooltipPosition === 'right' ? d3.event.pageX - 100 : d3.event.pageX - 50}px`);
            }
            return null;
          })
          .on('mouseout', function () {
            if (self.props.tooltip) {
              d3.select(this).style('cursor', 'default');
              tooltip.transition().duration(50).style('opacity', 0);
            }
            return null;
          });
    }
    else {
      svg.selectAll('path').data(partition(root).descendants());
    }
    svg.selectAll('path').transition().duration(1000).attrTween('d', (d, i) => self.arcTweenData(d, i, node, x, arc));
  }
  renderSunburst(props) {
    if (props.data) {
      const self = this
      const gWidth = props.width
      const gHeight = props.height
      const radius = (Math.min(gWidth, gHeight) / 2) - 10
      const svg = d3.select('svg').append('g').attr('transform', `translate(${gWidth / 2},${gHeight / 2})`)
      const x = d3.scaleLinear().range([0, 2 * Math.PI])
      const y = props.scale === 'linear' ? d3.scaleLinear().range([0, radius]) : d3.scaleSqrt().range([0, radius])
      const partition = d3.partition()
      const arc = d3.arc()
          .startAngle(d => Math.max(0, Math.min(2 * Math.PI, x(d.x0))))
          .endAngle(d => Math.max(0, Math.min(2 * Math.PI, x(d.x1))))
          .innerRadius(d => Math.max(0, y(d.y0)))
          .outerRadius(d => Math.max(0, y(d.y1)))

      // Add labels, using .centroid() to position
      d3.select('g')
          .selectAll('text')
          .data(arcData)
          .enter()
          .append('text')
          .each(function (d)
          {
            var centroid = arc.centroid(d);
            d3.select(this)
                .attr('x', centroid[0])
                .attr('y', centroid[1])
                .attr('dy', '0.33em')
                .text("TEST");
          });


      const hueDXScale = d3.scaleLinear()
          .domain([0, 1])
          .range([0, 360])
      const rootData = d3.hierarchy(props.data);
      const firstBuild = true;
      const node = rootData;
      rootData.sum(d => d.size);
      self.update(rootData, firstBuild, svg, partition, hueDXScale, x, y, radius, arc, node, self); // GO!
    }
  }
  render()
  {
    return (
        <div id = {this.props.keyId}
                className = "text-center" >
          <svg style = {{width: parseInt(this.props.width, 10) || 480, height: parseInt(this.props.height, 10) || 400 }}
                  id = {`${this.props.keyId}-svg`}
          />
        </div>
    )}
}

export default Sunburst;
