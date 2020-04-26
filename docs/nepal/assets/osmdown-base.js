//web.archive.org/web/20150429134704/http://osmdown-base
//============
//web.archive.org/web/20150429134704/http://Helper functions and formatters for all front end display
//

//web.archive.org/web/20150429134704/http://Define global variables
var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

//web.archive.org/web/20150429134704/http://D3 Defaults
var margin = {top: 20, right: 20, bottom: 30, left: 75},
  width = 900 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

// This is the standard date that comes out of EPIC-OSM
var parseDate = d3.time.format("%Y-%m-%d %X %Z").parse;

var x = d3.time.scale().range([0, width]);
    y = d3.scale.linear().range([height, 0]);
    xAxis = d3.svg.axis().scale(x).orient("bottom");
    yAxis = d3.svg.axis().scale(y).orient("left");

//web.archive.org/web/20150429134704/http://Default dateLine: give it a {date: (x) value: (y)}
var dateLine = d3.svg.line()
  .x(function(d) { return x(parseDate(d.date)) })
  .y(function(d) { return y(d.value)})

var COLORS = d3.scale.category20()

/*
     FILE ARCHIVED ON 13:47:04 Apr 29, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:36:15 Apr 06, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/