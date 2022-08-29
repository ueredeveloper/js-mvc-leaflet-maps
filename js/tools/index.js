/**
  * Converter as coordenadas do ArcGis - lon, lat - [[-47.5555,-15.000]] para o formato utilizado no Leaft Maps - lat, lng - [[-15.000,-47,000]]
  * @param [] rings Coordenadas do polígono.
  */
function convertArcGisToLeaflet(rings) {
  let _rings = rings.map(ring => {
    return ring.map(r => {
      // reverter valores de cada array (lon, lat => lat, long).
      return r.reverse()
    })
  });
  return _rings;
}

export {convertArcGisToLeaflet}