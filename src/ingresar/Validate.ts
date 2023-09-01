import Joi, { Schema, ValidationResult } from '@hapi/joi';

const payloadSchema: Schema = Joi.object({
    nombre: Joi.string().required(),
    periodo_rotacion: Joi.string().required(),
    periodo_orbital: Joi.string().required(),
    diametro: Joi.string().required(),
    clima: Joi.string().required(),
    gravedad: Joi.string().required(),
    terreno: Joi.string().required(),
    superficie_agua: Joi.string().required(),
    poblacion: Joi.string().required(),
    residentes: Joi.array().items(Joi.string()).required(),
    pelicula: Joi.array().items(Joi.string()).required(),
    creado: Joi.string().required(),
    editado: Joi.string().required(),
    url: Joi.string().required(),
});

export { payloadSchema };

export function validarPayload(payload: any): any {
    const { error, value } = payloadSchema.validate(payload);
    if (error && error.details) {
        throw new Error(JSON.stringify(error.details));
    }
};
