var startDate = new Date();
startDate.setUTCHours(0, 0, 0, 0);
//
// var map = L.map('map', {
//     zoom: 13,
//     fullscreenControl: true,
//     center: [41.122814627344, -111.77455902099611]
// });
var map = L.map('map', {
    zoom: 10,
    fullscreenControl: true,
    center: [41.055537533528664, -111.62933349609376]
});

// start of TimeDimension manual instantiation
var timeDimension = new L.TimeDimension({
        timeInterval: "2011-08-12T00:00:00Z/2015-10-17T00:00:00Z",
        period: "PT48H",
        currentTime: 1313128800
    });
// helper to share the timeDimension object between all layers
map.timeDimension = timeDimension; 
// otherwise you have to set the 'timeDimension' option on all layers.

var player        = new L.TimeDimension.Player({
    transitionTime: 50,
    loop: false,
    startOver:true
}, timeDimension);

var timeDimensionControlOptions = {
    player:        player,
	displayDate: false,
	loopButton: true,
    timeDimension: timeDimension,
    position:      'bottomleft',
    autoPlay:      false,
    minSpeed:      1,
    speedStep:     1,
    maxSpeed:      60,
    timeSliderDragUpdate: true
};
var customControl =  L.Control.extend({

    options: {
        position: 'bottomleft'
    },

    onAdd: function (map) {
        var container = L.DomUtil.create('div');
        container.id= 'dateDisp'
        container.style.backgroundColor = 'white';
        container.style.position = 'relative';
        container.style.width = '150px'
        container.style.margin = '10 auto';
        //container.style.backgroundImage = "url(http://t1.gstatic.com/images?q=tbn:ANd9GcR6FCUMW5bPn8C4PbKak2BJQQsmC-K9-mbYBeFZm1ZM2w2GRy40Ew)";
        // container.style.backgroundSize = "30px 30px";
        // container.style.width = '30px';
        // container.style.height = '30px';
        return container;
    }
});
var customControl2 =  L.Control.extend({

    options: {
        position: 'bottomright'
    },

    onAdd: function (map) {
        var container = L.DomUtil.create('div');
        container.id = 'distancesDisplay';
        container.style.position = 'relative';
        container.style.width = "150px";
        container.style.margin = '10 auto';
        container.innerHTML = '<div id = "dist1" class = "dist"></div><div id ="dist2" class = "dist"></div><div id="dist3" class = "dist"></div><div id = "dist4" class = "dist"></div><div id = "dist5" class = "dist"></div>';
        // console.log(container);
        return container;
    }
});

var timeDimensionControl = new L.Control.TimeDimension(timeDimensionControlOptions);
map.addControl(timeDimensionControl);

var elk_icon = L.icon({
    iconUrl: 'img/elk.png',
    iconSize: [30,30]

});
var deer_icon = L.icon({
    iconUrl: 'img/deer.png',
    iconSize: [38, 38]
});
var trout_icon = L.icon({
    iconUrl: 'img/trout3.png',
    iconSize: [40, 40]
});
// var myIcon = L.icon({
//     iconUrl: 'leaflet/images/marker-icon.png',
//     iconSize: [10,10],
//     iconAnchor: [22, 94],
//     popupAnchor: [-3, -76],
//     shadowUrl: 'leaflet/images/marker-shadow.png',
//     shadowSize: [68, 95],
//     shadowAnchor: [22, 94]
// });
var customLayer = L.geoJson(null, {
    pointToLayer: function (feature, latLng) {
        if (feature.properties.hasOwnProperty('last')) {
            return new L.Marker(latLng, {icon:trout_icon});
            // return null;
        }
        return L.Marker(latLng);
        // return null;
    },
    style: {color: '#7d00ff',weight:7.5}
});
var customLayer2 = L.geoJson(null, {
    pointToLayer: function (feature, latLng) {
        if (feature.properties.hasOwnProperty('last')) {
            return new L.Marker(latLng, {icon:trout_icon});
        }
        return L.circleMarker(latLng);
    },
    style: {color: '#FF1493', weight:3.5}
});

var customLayer3 = L.geoJson(null, {
    pointToLayer: function (feature, latLng) {
        if (feature.properties.hasOwnProperty('last')) {
            return new L.Marker(latLng, {icon:trout_icon});
        }
        return L.circleMarker(latLng);
    },
    style: {color: '#FF1493', weight:3.5}
});
var customLayer3_full = L.geoJson(null, {
    pointToLayer: function (feature, latLng) {
        if (feature.properties.hasOwnProperty('last')) {
            return new L.Marker(latLng, {icon:elk_icon});
        }
        return L.circleMarker(latLng, {icon:elk_icon});

    },
    style: function (feature) {
        switch(feature.properties.name) {
            case "1":
                return {color: '#01a9b2', weight: 2, opacity: 1};
            case "2":
                return {color: '#b1f4fc', weight: 2, opacity: 1};
            case "3":
                return {color: '#EB7618', weight: 2, opacity: 1};
            case "4":
                return {color: '#3bbc89', weight: 2, opacity: 1};
            case "5":
                return {color: '#f099ca', weight: 2, opacity: 1};
             case "6":
                return {color: '#f73e6b', weight: 2, opacity: 1};
            case "7":
                return {color: '#ca8bd1', weight: 2, opacity: 1};
            case "8":
                return {color: '#d6343b', weight: 2, opacity: 1};
            case "9":
                return {color: '#1730c6', weight: 2, opacity: 1};
            case "10":
                return {color: '#d859e0', weight: 2, opacity: 1};
             case "11":
                return {color: '#ca05e3', weight: 2, opacity: 1};
            case "12":
                return {color: '#654b8e', weight: 2, opacity: 1};
            case "13":
                return {color: '#3782c1', weight: 2, opacity: 1};
            case "14":
                return {color: '#b38623', weight: 2, opacity: 1};
        }
    }
});
var customLayer4 = L.geoJson(null, {
    pointToLayer: function (feature, latLng) {
        if (feature.properties.hasOwnProperty('last')) {
            return new L.Marker(latLng, {icon:trout_icon});
        }
        return L.circleMarker(latLng);
    },
    style: {color: '#040fff', weight:5.5}
});
var customLayer5 = L.geoJson(null, {
    pointToLayer: function (feature, latLng) {
        if (feature.properties.hasOwnProperty('last')) {
            return new L.Marker(latLng, {icon:trout_icon});
        }
        return L.circleMarker(latLng);
    },
    style: {color: '#ff5700', weight:7.5}

});
var customLayer6 = L.geoJson(null, {
    pointToLayer: function (feature, latLng) {
        if (feature.properties.hasOwnProperty('last')) {
            return new L.Marker(latLng, {icon:trout_icon});
        }
        return L.circleMarker(latLng);
    },
    style: {color: '#ffbb04', weight:7.5}

});
var gpxLayer = omnivore.gpx('data/fish1.gpx', null, customLayer);
var gpxLayerFish5 = omnivore.gpx('data/fish5.gpx', null, customLayer5);
var gpxLayerFish6 = omnivore.gpx('data/fish6.gpx', null, customLayer6);
var gpxTimeLayerFish1 = L.timeDimension.layer.geoJson(gpxLayer, {
    updateTimeDimension: false,
    addlastPoint: true,
    waitForReady: true,
    updateTimeDimensionMode: 'extremes'
});
var gpxLayer2 = omnivore.gpx('data/fish2.gpx', null, customLayer2);

var gpxTimeLayerFish2 = L.timeDimension.layer.geoJson(gpxLayer2, {
    updateTimeDimension: false,
    addlastPoint: false,
    waitForReady: true,
    duration:"P4M",
    updateTimeDimensionMode: 'extremes'
});
var gpxTimeLayerFish5 = L.timeDimension.layer.geoJson(gpxLayerFish5, {
    updateTimeDimension: false,
    addlastPoint: true,
    waitForReady: true,
    updateTimeDimensionMode: 'extremes'
});
var gpxTimeLayerFish6 = L.timeDimension.layer.geoJson(gpxLayerFish6, {
    updateTimeDimension: false,
    addlastPoint: true,
    waitForReady: true,
    updateTimeDimensionMode: 'extremes'
});
var gpxLayer3 = omnivore.gpx('data/fish2.gpx', null, customLayer3);
// var gpxLayer3_full = omnivore.gpx('data/Elk_WasatchCurrantCreek.gpx', null, customLayer3_full);
var gpxLayer4 = omnivore.gpx('data/fish3.gpx', null, customLayer4);
// var group = new L.featureGroup([gpxLayer, gpxLayer2, gpxLayer3, gpxLayer4]);
// var gpxLayer4_full = omnivore.gpx('data/deer3.gpx', null, customLayer4).on('ready', function() {
//     // map.fitBounds(group.getBounds(), {
//     //     paddingBottomRight: [40, 40]
//     // });
// });
//
// // map.fitBounds(group.getBounds());
//
var gpxTimeLayer3 = L.timeDimension.layer.geoJson(gpxLayer3, {
    updateTimeDimension: false,
    addlastPoint: true,
    waitForReady: true,
    updateTimeDimensionMode: 'extremes'
});
// var gpxTimeLayer3_full = L.timeDimension.layer.geoJson(gpxLayer3_full, {
//     updateTimeDimension: true,
//     addlastPoint: true,
//     waitForReady: true
// });
var gpxTimeLayerFish3 = L.timeDimension.layer.geoJson(gpxLayer4, {
    updateTimeDimension: false,
    addlastPoint: true,
    waitForReady: true,
    updateTimeDimensionMode: 'extremes'
});
// var gpxTimeLayer4_full = L.timeDimension.layer.geoJson(gpxLayer4_full, {
//     updateTimeDimension: true,
//     addlastPoint: true,
//     waitForReady: true
// });
var barriers = L.esri.featureLayer({
  url: '//services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/MigrationLegacyInitiative_WeberRiver_Background/FeatureServer/0'});
var antennas= L.esri.featureLayer({
  url: '//services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/MigrationLegacyInitiative_WeberRiver_Background/FeatureServer/1'});
var historic_dist= L.esri.featureLayer({
  url: '//services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/MigrationLegacyInitiative_WeberRiver_Background/FeatureServer/2'});
var huc10 = L.esri.featureLayer({
  url: '//services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/MigrationLegacyInitiative_WeberRiver_Background/FeatureServer/3'});
var state = L.esri.featureLayer({
  url: '//services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/MigrationLegacyInitiative_WeberRiver_Background/FeatureServer/4'}).addTo(map);
// barriers.on('ready',barriers.addTo(map));
// antennas.on('ready',antennas.addTo(map));
// historic_dist.on('ready',historic_dist.addTo(map));
huc10.on('ready',huc10.addTo(map));

// var greenIcon = L.icon({
//     iconUrl: 'https://preview.ibb.co/j7PPdv/Pacificorp_dam_closed.jpg',
//     iconSize:     [350, 350]
// });
// var pics = L.marker([41.199477, -111.858014], {icon: greenIcon}).addTo(map);


barriers.bindPopup(function (layer) {
    if (layer.feature.properties.Pic != null && layer.feature.properties.Pic2 != null){

    return L.Util.template('<b>Barrier Location - {BarName}<br><br>{Comments}</b><br><br><table style="width:100%; border-spacing: 15px;"><tr><td><a href="{Pic2}" target = "_blank"><img src="{Pic2}" alt="Open Dam" ></a></td><td><a href="{Pic}" target = "_blank"><img src="{Pic}" alt="Open Dam"></a></td></tr></table>', layer.feature.properties);
  }
  else if (layer.feature.properties.Pic != null){
        return L.Util.template('<p><b>Barrier Location - {BarName}<br><br>{Comments}</b><br><br><a href="{Pic}" target = "_blank"><img src="{Pic}" alt="Open Dam" "></a></p>', layer.feature.properties);
    }
     else if (layer.feature.properties.Pic2 != null){
        return L.Util.template('<p><b>Barrier Location - {BarName}<br><br>{Comments}</b><br><br><a href="{Pic2}" target = "_blank"><img src="{Pic2}" alt="Open Dam"></a></p>', layer.feature.properties);
    }
  else {
         return L.Util.template('<p><b>Barrier Location - {BarName}<br><br>{Comments}</b>', layer.feature.properties);
    }
});


antennas.bindPopup(function(layer){
    return L.Util.template('<p><b>Antenna Location </b></p>', layer.feature.properties);
});

var groupedOverlays = {
    "Individuals":{
        "Fish 1": gpxTimeLayerFish1,
        "Fish 2 (Trailing Tail)": gpxTimeLayerFish2,
        "Fish 2 (Full Path)": gpxTimeLayer3,
        "Fish 3": gpxTimeLayerFish3,
        "Fish 5": gpxTimeLayerFish5,
        "Fish 6": gpxTimeLayerFish6
    },
    "Reference Layers": {
    "Barriers": barriers,
    "Antenna Locations": antennas,
        "Historic Distributions": historic_dist,
        "HUC 10": huc10
}};
var baseLayers = getCommonBaseLayers(map); // see baselayers.js

map.addControl(new customControl());
map.addControl(new customControl2());
L.control.groupedLayers(baseLayers, groupedOverlays).addTo(map);

// gpxTimeLayerFish5.addTo(map);
// gpxTimeLayerFish1.addTo(map);
// gpxTimeLayer3.addTo(map);
// gpxTimeLayerFish3.addTo(map);
// gpxTimeLayerFish6.addTo(map);
// gpxLayerFish6.on('ready',gpxTimeLayerFish6.addTo(map));
// gpxLayerFish5.on('ready',gpxTimeLayerFish5.addTo(map));
// gpxLayer.on('ready',gpxTimeLayerFish1.addTo(map));
// gpxLayer3.on('ready',gpxTimeLayer3.addTo(map));
// gpxLayer4.on('ready',gpxTimeLayerFish3.addTo(map));
// gpxLayer3.on('ready',gpxTimeLayer3.addTo(map));


var legendToggle = L.easyButton({
  states: [{
    stateName: 'legend-on',
    icon: 'fa-list-ul',
    title: 'Toggle Legend Off',
    onClick: function(control) {
      map.removeLayer(huc10);
       map.removeLayer(state);
        map.flyTo([41.122814627344, -111.77455902099611],13),{
        duration: 10
        };
      control.state('legend-off');
    }
  }, {
    icon: 'fa-th-list',
    stateName: 'legend-off',
    onClick: function(control) {
      // currentLegend.addTo(map);
      control.state('legend-on');
    },
    title: 'Toggle Legend On'
  }]
});
legendToggle.addTo(map);
map.on('overlayadd', function (eventLayer) {
    if (eventLayer.name === 'Deer 1') {
        map.flyToBounds(gpxLayer.getBounds(), {
        paddingBottomRight: [40, 40]
    })
    }
    else if  (eventLayer.name === 'Deer 2') {
       map.flyToBounds(gpxLayer2.getBounds(), {
        paddingBottomRight: [40, 40]
    })
    }
    else if  (eventLayer.group.name === 'Deer Group') {
       map.flyToBounds(gpxLayer4.getBounds(), {
        paddingBottomRight: [40, 40]
    })
    }
    else if  (eventLayer.group.name === 'Elk Group') {
       map.flyToBounds(gpxLayer3.getBounds(), {
        paddingBottomRight: [40, 40]
    })
    }
});
map.on('overlayadd', function (eventLayer) {
    if (eventLayer.name === 'Land Ownership') {
        map.removeControl(currentLegend );
        currentLegend = legend;
        if (legendToggle._currentState.stateName === 'legend-on') {
            currentLegend.addTo(map);
        }
    }
    });
map.on('overlayremove', function (eventLayer) {
    if (eventLayer.name === 'Land Ownership') {
        map.removeControl(currentLegend );
        currentLegend = legend2;
       if (legendToggle._currentState.stateName === 'legend-on') {
            currentLegend.addTo(map);
        }
    }
    });
L.control.scale({position: "topright"}).addTo(map);

 $('#dateDisp').hide();

gpxTimeLayerFish5.on('add', function(){
    $('#dist4').show();
});
gpxTimeLayerFish5.on('remove', function(){
    $('#dist4').hide();
});
gpxTimeLayerFish1.on('add', function(){
    $('#dist1').show();
});
gpxTimeLayerFish1.on('remove', function(){
    $('#dist1').hide();
});
gpxTimeLayer3.on('add', function(){
    $('#dist2').show();
});
gpxTimeLayer3.on('remove', function(){
    $('#dist2').hide();
});
gpxTimeLayerFish3.on('add', function(){
    $('#dist3').show();
});
gpxTimeLayerFish3.on('remove', function(){
    $('#dist3').hide();
});
gpxTimeLayerFish6.on('remove', function(){
    $('#dist5').hide();
});
gpxTimeLayerFish3.on('add', function(){
    $('#dist5').show();
});

// if (map.hasLayer(gpxTimeLayerFish1)){
        //     $('#dist1').show();
        // }
        // if (map.hasLayer(gpxTimeLayer3)){
        //      $('#dist2').show();
        // }
        // if (map.hasLayer(gpxTimeLayerFish3)){
        //      $('#dist3').show();
        // }
        // if (map.hasLayer(gpxTimeLayerFish5)){
        //      $('#dist4').show();
        // }
map.on('moveend', function(e) {
   var bounds = map.getCenter();
   var zoom = map.getZoom();
   console.log(bounds, zoom);
});

$('#dist1').click(function(){window.open('https://schall11.github.io/fish1')});
$('#dist2').click(function(){

    map.flyTo([41.122814627344, -111.77455902099611],13),{
        duration: 10
}});
// $('#dist2').click(function(){map.setZoomAround({lat: 41.122814627344, lng: -111.77455902099611},13),{
//         reset:false,
//         animate: true,
//         duration: 4
//
// }});
$('#dist3').click(function(){map.flyTo([40.094882122321174, -112.29125976562501],7),{
    pan: {
        animate: true,
        duration: 10
    },
}});
map.on('zoomend', function() {
    barriers.addTo(map);
    historic_dist.addTo(map);
    gpxTimeLayerFish6.addTo(map);
    gpxTimeLayerFish5.addTo(map);
    gpxTimeLayerFish1.addTo(map);
    gpxTimeLayer3.addTo(map);
    gpxTimeLayerFish3.addTo(map);
    gpxTimeLayer3.addTo(map);
// map.removeLayer(huc10);
    $('#dist1').show();
     $('#dist2').show();
     $('#dist3').show();
     $('#dist4').show();
     $('#dist5').show();
    // gpxLayerFish6.on('ready',gpxTimeLayerFish6.addTo(map));
    // gpxLayerFish5.on('ready',gpxTimeLayerFish5.addTo(map));
    // gpxLayer.on('ready',gpxTimeLayerFish1.addTo(map));
    // gpxLayer3.on('ready',gpxTimeLayer3.addTo(map));
    // gpxLayer4.on('ready',gpxTimeLayerFish3.addTo(map));
    // gpxLayer3.on('ready',gpxTimeLayer3.addTo(map));
    // huc10.addTo(map);
    // barriers.on('ready',barriers.addTo(map));
// antennas.on('ready',antennas.addTo(map));
// historic_dist.on('ready',historic_dist.addTo(map));
// huc10.on('ready',huc10.addTo(map));
});