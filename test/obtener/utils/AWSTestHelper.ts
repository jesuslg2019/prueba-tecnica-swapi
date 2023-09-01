import Service from "../../../src/obtener/Service";


export function buildSolicitud(action: string, payload: any) {
    const evento = require('../request/MiddlewareLambda.json');
    evento.action = action;
    evento.payload = payload;
    return evento;
};

export function mockConsultarSwapi() {
    const mockData = require('../mocks/consultaSwapiPlanets1.json');
    jest.spyOn(Service.prototype, 'obtenerDatos')
        .mockImplementation(() => Promise.resolve(mockData));
};
