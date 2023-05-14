import Joi from 'joi'

export const authDataSchema: Joi.ObjectSchema = Joi.object({
  idToken: Joi.string().required()
})
