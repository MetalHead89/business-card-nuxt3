import { firestore } from '@/server/firebase'
import { collection, getDocs } from 'firebase/firestore'

export default defineEventHandler(async () => {
  const querySnap = await getDocs(collection(firestore, 'users'))
  const users: any[] = []
  querySnap.forEach(doc => {
    users.push(doc.data())
  })

  return users
})
