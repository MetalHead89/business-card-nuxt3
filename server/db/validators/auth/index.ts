import validator from '@/server/db/validators/validator'
import { authDataSchema } from '@/server/db/schemas/auth'
import { authDataType } from '@/server/db/types/auth'
import { authDataValidationResult } from '@/server/db/types/schemas'
import Joi from 'joi'

const ERROR_MESSAGES = {
  email: 'Поле \'Email\' не может быть пустым',
  password: 'Поле \'Пароль\' не может быть пустым'
}

export default function(payload: authDataType) {
  const { error } = validator(authDataSchema)(payload)
  const validationResult: authDataValidationResult = { isValid: true }

  if (!error) {
    return validationResult
  }

  validationResult.isValid = false
  validationResult.data =  error.details.map(errorDetails => getErrorDescription(errorDetails))

  return validationResult
}

function getErrorDescription(error: Joi.ValidationErrorItem) {
  const path = error.path[0]

  return {
    path,
    messages: [ERROR_MESSAGES[path as keyof authDataType]]
  }
}
