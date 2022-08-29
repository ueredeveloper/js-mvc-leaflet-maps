/*
  * Leitura da shape do sistema fraturado em formato `.json`.
  *
  *
  */
async function fetchFraturado() {

  try {
    let fraturado = await fetch('../../json/fraturado.json').then(fraturado => { return fraturado.json() })
    //.then(fraturado=> console.log(fraturado))
    return fraturado;

  } catch (error) {
    console.log(error)
  }
}
export { fetchFraturado }