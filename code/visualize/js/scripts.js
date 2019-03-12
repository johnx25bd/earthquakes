// The main js file to be executed in the client's browser

var dims = {
  width: window.innerWidth,
  height: window.innerHeight,
  margins: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10
  }
}

var worldJson = './data/ne_110m_land.json';
var earthquakeJson = './data/earthquakes.json';
var worldmap, worldg;

var proj = d3.geoOrthographic();
var graticule = d3.geoGraticule();
var path = d3.geoPath(proj);

setupWorldMap();

// queue() // from https://github.com/d3/d3-queue
//   .defer(loadWorld, worldJson)
//   .defer(loadEarthquakes, earthquakeJson)
//   .await(function(error, worldFromJson, earthquakeData) {
//     if (error) throw error;
//     console.log(worldFromJson);
//   });




  d3.json(worldJson).then((data) => {

    console.log(data);
    // Draw geometries, assigning each element appropriate attributes
    // based on metadata contained in geojson
    worldg.selectAll('path')
      .data(data.features)
      .enter()
      .append('path')
      .attr('d', path)
      .attr('class', 'geography');

    // then draw graticules over geography
    worldg.append('path')
      .datum(graticule)
      .attr('class', 'graticule')
      .attr('d', path);

    d3.json(earthquakeJson).then((earthquakes) => {
      console.log(earthquakes);
      worldg.selectAll('earthquake')
        .data(earthquakes.features)
        .enter()
        .append('circle')
        .classed('earthquake', true)
        .attr('cx', (d) => {
          console.log(d);
          return proj(d.geometry.coordinates)[0];
          // return proj(d.geometry.coordinates)(0);
        })
        .attr('cy', (d) => {
          return proj(d.geometry.coordinates)[1];
          // return proj(d.geometry.coordinates)(1);
        })
        .attr('r', (d) => {
          return (d.properties.mag ** 2 )/ 10;
        });

    });
  });



function loadEarthquakes(jsonPath, callback) {
  d3.json(jsonPath, (blogData) => {

    // add circles to map.
    for (key in blogData) {
      blogs.push(blogData[key]);
    }
    callback(null, blogs);
  });
}


function setupWorldMap () {
  worldmap = d3.select('#map')
    .attr('viewbox', function() {
      return '0 0 ' + dims.width + ' ' + dims.height
    });

  worldg = worldmap.append('g').classed('worldg', true);
}
