import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/server/firebase'
// import { firestore } from '@/server/firebase'
// import { collection, getDocs } from 'firebase/firestore'

export default defineEventHandler(async event => {
  const body = await readBody(event)
  const userCredential = await signInWithEmailAndPassword(auth, body.email, body.password  )
  console.dir(userCredential)
  return body
  // const userCredential = await signInWithEmailAndPassword(auth)
  // console.dir(userCredential)
  // const querySnap = await getDocs(collection(firestore, 'users'))
  // const users: any[] = []
  // querySnap.forEach(doc => {
  //   users.push(doc.data())
  // })

  // return users
})
