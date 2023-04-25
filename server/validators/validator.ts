import Joi from 'joi'

export default (schema: Joi.ObjectSchema<any>) => (payload: object) =>
  schema.validate(payload, { abortEarly: false })
