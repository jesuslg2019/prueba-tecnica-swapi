import AWS from 'aws-sdk';
import { hash } from '../commons/service.support';

AWS.config.update({ region: 'us-east-2' });

export default class DataAccess {
    public async insertarDatos(payload: any): Promise<any> {
        const dynamoDb = new AWS.DynamoDB.DocumentClient();
        const params: any = {
            TableName: process.env.TABLA_DATOSSWAPI,
            Item: {
                ID: hash(),
                ...payload
            }
        }
        try {
            await dynamoDb.put(params).promise();
            return {
                status: "ok",
                messsage: "ingreso el registro con éxito."
            };
        } catch (error) {
            console.log(error)
            throw new Error(JSON.stringify(error));
        }
    }
};
