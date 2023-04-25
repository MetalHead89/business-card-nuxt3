import { fbAuth } from '@/server/models/firebase'
import { authDataType } from '@/server/types/auth'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function({ email, password }: authDataType) {
  return signInWithEmailAndPassword(fbAuth, email, password )
    .catch(({ code }) => {
      switch(code) {
        case 'auth/user-not-found':
          return Promise.reject({
            statusCode: 400,
            data: {
              errorMessage: 'Неверные email или пароль',
              errors: []
            }
          })
        default:
          return Promise.reject({
            statusCode: 500,
            data: {
              errorMessage: 'Произошла непредвиденная ошибка',
              errors: []
            }
          })
      }
    })
}
