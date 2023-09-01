import { validarPayload } from "./Validate";
import { Service } from "./Service";
export class Controller {
    public static async ingresarDatos(payload: any): Promise<any> {
        validarPayload(payload);
        return Service.ingresarDatos(payload);
    }
};
