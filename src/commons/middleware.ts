export const formatResponseMiddleware = (message: string) => {
    return {
        response: message
    };
};

export const formatErrorResponse = (error: any) => {
    const errorJSON = error.message;
    const response = {
        error: JSON.parse(errorJSON) || null
    };
    const formattedJson = JSON.stringify(response, null, 2);
    return formattedJson;
};


export const formatRequestMiddleware = (event: any) => {
    if (event.origin === 'API_GATEWAY_REST_EVENT' && event.httpMethod === 'GET') {
        const payload = {
            service: event.query.service,
            number: event.query.number,
        };
        return { ...payload };
    }
    else if (event.origin === 'API_GATEWAY_REST_EVENT' && event.httpMethod === 'POST') {
        if (event.body && !event.body.payload) {
            throw new Error("El request no tiene el formato indicado");
        }
        const payload = {
            ...event.body.payload
        };
        return { ...payload };
    } else if (event.origin === 'LAMBDA_EVENT') {
        if (event && !event.payload) {
            throw new Error("El request no tiene el formato indicado");
        }
        const payload = {
            ...event.payload
        };
        return { ...payload };
    } else {
        return event;
    }
}
