import React, { useEffect } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import Style from 'ol/style/Style';
import { fromLonLat } from 'ol/proj';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Icon } from 'ol/style';

export const MapComponent = ({lat,long}) => {

    useEffect(() => {
        const map = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            view: new View({
                center: fromLonLat([long, lat]), // Coordenadas de San Francisco como ejemplo
                zoom: 16
            })
        });

        // Agregar marcador
        const marker = new Feature({
            geometry: new Point(fromLonLat([long, lat])) // Coordenadas del marcador
        });

        const markerStyle = new Style({
            image: new Icon({
                anchor: [0.5, 46],
                anchorXUnits: 'fraction',
                anchorYUnits: 'pixels',
                src: 'https://openlayers.org/en/latest/examples/data/icon.png' // Icono del marcador
            })
        });
        
        marker.setStyle(markerStyle);

        const vectorLayer = new VectorLayer({
            source: new VectorSource({
                features: [marker]
            })
        });

        map.addLayer(vectorLayer);

        return () => map.dispose(); // Limpiar al desmontar el componente
    }, []);

    return <div id="map" className='w-full h-full' ></div>;
}
