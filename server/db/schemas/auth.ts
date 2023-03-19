import Joi from 'joi'

export const authDataSchema: Joi.ObjectSchema = Joi.object({
  email: Joi.string(),
  password: Joi.string()
})
