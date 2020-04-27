'use strict';

var fs = require('fs')
var path = require('path');
var tileReduce = require('@mapbox/tile-reduce');

// TODO Should just read from argv?

var counts = {
    'buildings':0,
    'highwayKM':0,
    'pois':0,
}

tileReduce({
    map: path.join(__dirname, "quick-map.js"),
    zoom: 12,
    sources: [{name: 'osm', mbtiles: path.join("../../osm-qa-with-tr-april2020.mbtiles"), raw: false}],
//     output: fs.createWriteStream('../data/full-extraction.geojsonseq'),
//     bbox: [5.9559,45.818,10.4921,47.8084],
    numWorkers: 32
})
.on('reduce', function(res){
    counts.buildings += res.buildings;
    counts.highwayKM += res.highwayKM;
    counts.pois += res.pois;
})
.on('end', function(){  
  var resultString = JSON.stringify(counts, null, 2)
  console.warn(resultString)
  
  fs.writeFileSync('output.json', resultString);
    
  console.warn("Done");
})

