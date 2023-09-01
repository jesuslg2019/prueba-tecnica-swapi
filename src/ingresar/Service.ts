import DataAccess from "./DataAccess";
const dataAccess: DataAccess = new DataAccess();

export class Service {
    public static async ingresarDatos(payload: any): Promise<any> {
        return dataAccess.insertarDatos(payload);
    }
};
