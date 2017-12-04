import * as d3 from 'd3';
import _ from 'lodash';

import './style/style.scss';

import data from './data.csv';

data.forEach(d => (d.width = d.frequency, d.height = d.frequency));
import forceExtent from './force-extent.js';

const width = 560;
const height = 400;
const svg = d3.select('#app').append('svg')
  .attr('width', width)
  .attr('height', height);

// const margin = {
//   top: 80, right: 80, bottom: 80, left: 80
// };
// const centerMargin = 100;

// const width = +svg.attr('width') - margin.left - margin.right;
// const height = +svg.attr('height') - margin.top - margin.bottom;

d3.select('#app')
  .style('width', `${width}px`)
  .style('height', `${height}px`);

const g = svg
  .append('g');
  // .attr('transform', `translate(${margin.left},${margin.top})`);

const pad = 10;
const rect = g.selectAll('g')
  .data([...data, ...data], () => Math.random() * 200)
  .enter().append('g')
  .append('rect')
  .attr('width', d => d.width)
  .attr('height', d => d.height)
  .attr('fill', 'red');

d3.forceSimulation(data)
  .force('center', d3.forceCenter(width / 2, height / 2))
  .force('charge', d3.forceManyBody(-1000))
  .force(
    'extent',
    forceExtent()
      .extent([[0, 0], [width, height]])
      .bbox(d => [
        [-d.width / 2 - pad, -d.height / 2 - pad],
        [d.width / 2 + pad / 2, d.height / 2 + pad / 2]
      ])
    // .strength(() => 0.7)
  )
  .on('tick', () => rect.attr('transform', d => `translate(${d.x - d.width/2}, ${d.y - d.height/2})`));
