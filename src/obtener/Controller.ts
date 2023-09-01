import Service from "./Service";
const service: Service = new Service();

export class Controller {
    public static async obtenerDatos(payload: any): Promise<any> {
        return service.obtenerDatos(payload);
    }
};
