import DataAccess from "./DataAccess";
const dataAccess: DataAccess = new DataAccess();
interface Payload {
    service: string;
    number: string;
};

export default class Service {
    public async obtenerDatos(payload: any): Promise<any> {
        const { service, number }: Payload = payload;
        return dataAccess.main(service, number);
    }
};
