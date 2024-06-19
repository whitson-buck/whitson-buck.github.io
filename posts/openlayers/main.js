import OSM from '../../../../../homepage/node_modules/ol/source/OSM'
import TileLayer from '../../../../../homepage/node_modules/ol/layer/Tile'
import {Map, View} from '../../../../../homepage/node_modules/ol'
import {fromLonLat} from '../../../../../ol/proj'

new Map({
    target: 'map-container',
    layers: [
        new TileLayer ({
            source: new OSM(),
        }),
    ],
    view: new View({
        center: fromLonLat([0,0]),
        zoom: 2,
    }),
});

node_modules/ol