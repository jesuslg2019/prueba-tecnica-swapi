import { loadFeature, defineFeature } from 'jest-cucumber';
import { handler } from '../../../src/obtener/App';
import {
  buildSolicitud, mockConsultarSwapi
} from '../utils/AWSTestHelper';
const feature = loadFeature('./../obtener.feature', { loadRelativePath: true, errors: true });
import MockAdapter from 'axios-mock-adapter';

defineFeature(feature, (test) => {

  test('Recuperar datos con éxito', ({ given, when, then }) => {
    const action: string = 'obtenerDatos';
    let solicitud: any;
    let respuesta: any;

    given(/^se envía el get con (.*) y (.*)$/, (request) => {
      // const payload: any = require(`../request/${request}.json`);
      // solicitud = buildSolicitud(action, payload);
    });

    when(/^consulta el api$/, async () => {
      // mockConsultarSwapi();
    });

    then(/^se muestra resultado (.*) ok$/, (respuestaData) => {
    });
  })
})
