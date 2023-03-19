import Joi from 'joi'

export default (schema: Joi.AnySchema) => (payload: object) =>
  schema.validate(payload, { abortEarly: false })
