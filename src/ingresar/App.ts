import { Controller } from "./Controller";
import { formatResponseMiddleware, formatRequestMiddleware, formatErrorResponse } from "../commons/middleware";

export const handler = async (event: any): Promise<any> => {
    try {
        const evento = formatRequestMiddleware(event);
        const resultado = await Controller.ingresarDatos(evento);
        const formattedResponse = formatResponseMiddleware(resultado);
        return JSON.stringify(formattedResponse);
    } catch (error) {
        return formatErrorResponse(error);
    }
};
