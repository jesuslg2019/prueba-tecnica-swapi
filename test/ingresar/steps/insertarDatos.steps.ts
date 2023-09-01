import { loadFeature, defineFeature } from 'jest-cucumber';
import { handler } from '../../../src/ingresar/App';
import {
  buildSolicitud, mockInsertarDatos
} from '../utils/AWSTestHelper';
const feature = loadFeature('./../ingresar.feature', { loadRelativePath: true, errors: true });

defineFeature(feature, (test) => {
  test('Agregar datos con exito', ({ given, when, then }) => {
    const action: string = 'ingresarDatos';
    let solicitud: any;
    let respuesta: any;

    given(/^se envía el request (.*) con datos swapi$/, (request) => {
      const payload: any = require(`../request/${request}.json`);
      solicitud = buildSolicitud(action, payload);
    });

    when(/^ingresa datos a la bd$/, async () => {
      mockInsertarDatos();
      const respuestaRow = await handler(solicitud);
      respuesta = JSON.parse(respuestaRow.toString());
    });

    then(/^se muestra resultado (.*) ok$/, (respuestaData) => {
      const resultado: any = require(`../response/${respuestaData}.json`);
      expect(respuesta.response.status).toEqual(resultado.response.status);
      expect(respuesta.response.mensaje).toEqual(resultado.response.mensaje);
    });
  })

  test('Agregar datos sin exito', ({ given, when, then }) => {
    const action: string = 'ingresarDatos';
    let solicitud: any;
    let respuesta: any;

    given(/^se envía el request (.*) con datos swapi$/, (request) => {
      const payload: any = require(`../request/${request}.json`);
      solicitud = buildSolicitud(action, payload);
    });

    when(/^ingresa datos a la bd$/, async () => {
      try {
        const respuestaRow = await handler(solicitud);
        respuesta = JSON.parse(respuestaRow.toString());
      } catch (error) {
        respuesta = JSON.parse(error);
      }
    });

    then(/^se muestra resultado (.*) error$/, (respuestaData) => {
      const resultado: any = require(`../response/${respuestaData}.json`);
      expect(respuesta.error[0].message).toEqual(resultado.error[0].message);
    });
  })
})
