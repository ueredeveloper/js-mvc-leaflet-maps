
import { FraturadoModel } from './models/fraturado-model.js';
import {FraturadoView} from './views/fraturado-view.js';
import {FraturadoController} from './controllers/fraturado-controller.js';



new FraturadoController (new FraturadoModel(), new FraturadoView());



