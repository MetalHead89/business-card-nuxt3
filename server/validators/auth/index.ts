import validator from '@/server/validators/validator'
import { authDataSchema } from '@/server/schemas/auth'
import { authDataType } from '@/server/types/auth'
import Joi from 'joi'

const ERROR_MESSAGES = {
  email: 'Поле \'Email\' не может быть пустым',
  password: 'Поле \'Пароль\' не может быть пустым'
}

export default function(payload: authDataType) {
  return new Promise((resolve, reject) => {
    const { error } = validator(authDataSchema)(payload)

    if (!error) {
      return resolve(true)
    }

    return reject({
      statusCode: 400,
      data: {
        errorMessage: 'Ошибка. Неверные данные',
        errors: error.details.map(errorDetails => getErrorDescription(errorDetails))
      }
    })
  })
}

function getErrorDescription(error: Joi.ValidationErrorItem) {
  const path = error.path[0]

  return {
    path,
    messages: [ERROR_MESSAGES[path as keyof authDataType]]
  }
}
