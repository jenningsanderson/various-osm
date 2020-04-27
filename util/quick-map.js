var _     = require('lodash');
var turf = require("@turf/turf");
var tilebelt = require("@mapbox/tilebelt");

// COUNTERS
function countKM(features){
  var totalKM = 0;
  features.forEach(function(f){
    try{
      if (f.properties.highway && f.geometry.type==="LineString"){
        totalKM +=  turf.lineDistance(f)
      }
    }catch(e){
        console.warn("countKMFail: ", e.message)
    }
  })
  return totalKM;
}

function countBuildings(features){
  var totalBuildings = 0;
  features.forEach(function(f){
    try{
      if (f.properties.building && f.properties.building != "no"){
        totalBuildings++
      }
    }catch(e){
        console.warn("countBuildingFail: ", e.message)
    }
  })
  return totalBuildings;
}

function countPOIs(features){
  //How's this for a POI definition?
  var totalPOIs = 0;
  features.forEach(function(f){
    try{
      if (!f.properties.highway) {
        if (f.properties.amenity || f.properties.name){
          totalPOIs++
        }
      }
    }catch(e){
        console.warn("countPOIFail: ", e.message)
    }
  });
  return totalPOIs
}

module.exports = function(data, tile, writeData, done) {

  //Extract the osm layer from the mbtile
  var layer = data.osm.osm;
    
  const tileArea = turf.area(tilebelt.tileToGeoJSON(tile));
    
  //Group all features on a tile by username.
  var featuresWeLike = layer.features.filter(function(f){
          var featCoverage = (turf.area(f.geometry) / tileArea)       
          return featCoverage < 0.99;
      })
   
  done(null, {
    'buildings': countBuildings(featuresWeLike),
    'highwayKM': countKM(featuresWeLike),
    'pois'     : countPOIs(featuresWeLike)
  })
};
