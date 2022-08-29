import { convertArcGisToLeaflet } from '../tools/index.js';
import { map, Layer } from './map.js';
import { showInfo } from '../views/infowindow.js';
/*
*
  *
  *
  */
class FraturadoView {
  constructor() {
    this.checkbox = document.querySelector('#ch_fraturado');
    this.polygons = []
  }
  bindMostrar(handler) {
    this.checkbox.addEventListener('change', function() {
      if (this.checked) {
        handler(this.checked)
      } else {
        handler(this.checked)
      }
    });
  }

  async mostrar(features, checked) {

    if (checked) {
      let _features = await features;
      await _features.features.map((feature) => {

        let polygon = null;

        let attributes = feature.attributes
        // converter o formato de coordenadas
        let _rings = convertArcGisToLeaflet(feature.geometry.rings);

        polygon = Layer.polygon(_rings).addTo(map);
        // escolhe uma cor aleatória para cada polígono
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        // estilização do polígono
        polygon.setStyle({
          color: '#' + randomColor,
          weight: 1,
          fillColor: '#' + randomColor,
          fillOpacity: 0.4
        })
        // informaçãoes do polígono
        polygon.bindPopup(showInfo(attributes));
        this.polygons.push(polygon)
      });
    } else {
      this.polygons.forEach(polygon => {
        //remover todos os polígonos
        polygon.remove()
      })
      // limpar array de polígonos
      this.polygons = []
    }
  }
}

export { FraturadoView }