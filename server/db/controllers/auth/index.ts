
import { authDataType } from '@/server/db/types/auth'
import authDataValidator from '@/server/db/validators/auth'

export async function auth(payload: authDataType) {
  const { isValid, data } = authDataValidator(payload)

  if (!isValid) {
    return { statusCode: 400, message: 'Заполните обязательные поля', data, isValid }
  }

  // return await signInWithEmailAndPassword(fbAuth, email, password  )
}
