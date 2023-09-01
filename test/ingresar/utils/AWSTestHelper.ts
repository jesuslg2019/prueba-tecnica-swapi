import DataAccess from "../../../src/ingresar/DataAccess";

export function buildSolicitud(action: string, payload: any) {
    const evento = require('../request/MiddlewareLambda.json');
    evento.action = action;
    evento.payload = payload;
    return evento;
};

export function mockInsertarDatos() {
    const mockData = require('../mocks/insertarDatos.json');
    jest.spyOn(DataAccess.prototype, 'insertarDatos')
        .mockImplementation(() => Promise.resolve(mockData));
};
