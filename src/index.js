import * as d3 from 'd3';
import _ from 'lodash';

import './style/style.scss';

const svg = d3.select('#app').append('svg')
            .attr('width', 960)
            .attr('height', 800);

const margin = { top: 80, right: 80, bottom: 80, left: 80 };
const centerMargin = 100;

const width = +svg.attr('width') - margin.left - margin.right;
const height = +svg.attr('height') - margin.top - margin.bottom;

const g = svg
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

g.append('text').text("Hello PPPPPierre, that's your project template!")
                .style('font-size', 25);
