
/*
*
  *
  *
  *
  */
class FraturadoController {
  constructor(fraturado_model, fraturado_view) {
    this.fraturado_model = fraturado_model;
    this.fraturado_view = fraturado_view;
    this.fraturado_view.bindMostrar(this.handleMostrar);
  }
  handleMostrar = (checked) => {
    let features = this.getFeatures();
    this.fraturado_view.mostrar(features, checked);
  }
  async getFeatures() {
    let features = await this.fraturado_model.getFeatures();
    return features;
  }
}

export { FraturadoController }