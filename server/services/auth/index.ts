
import { authDataType } from '@/server/types/auth'
import authDataValidator from '@/server/validators/auth'
import { ValidatorErrorResponse } from '@/server/types/validators'
import authModel from '@/server/models/auth'

export async function auth(payload: authDataType) {
  return authDataValidator(payload)
    .then(() => {
      return authModel(payload)
        .then(data => Promise.resolve(data))
    })
    .catch((error: ValidatorErrorResponse) => Promise.reject(error))
}
