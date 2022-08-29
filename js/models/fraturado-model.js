import { fetchFraturado } from '../services/index.js';

class FraturadoModel {
  constructor() {}

  async getFeatures () {
    let fraturado = await fetchFraturado();
    return fraturado;
  }

}
export { FraturadoModel };