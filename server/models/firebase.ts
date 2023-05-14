import { initializeApp, cert, ServiceAccount } from 'firebase-admin/app'
import * as serviceAccount from '@/server/serviceAccountKey.json'

export const app = initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
  databaseURL: 'https://business-card-app-1a2d0-default-rtdb.firebaseio.com'
})

// export const createSessionCookie = getAuth().createSessionCookie

// import { initializeApp } from 'firebase/app'
// import { getAuth } from 'firebase/auth'
// import { getFirestore } from 'firebase/firestore'

// const {
//   FB_API_KEY,
//   FB_AUTH_DOMAIN,
//   FB_DATABASE_URL,
//   FB_PROJECT_ID,
//   FB_STORAGE_BUCKET,
//   FB_MESSAGING_SENDER_ID,
//   FB_APP_ID,
//   FB_MEASUREMENT_ID
// } = process.env

// const firebaseConfig = {
//   apiKey: FB_API_KEY,
//   authDomain: FB_AUTH_DOMAIN,
//   databaseURL: FB_DATABASE_URL,
//   projectId: FB_PROJECT_ID,
//   storageBucket: FB_STORAGE_BUCKET,
//   messagingSenderId: FB_MESSAGING_SENDER_ID,
//   appId:FB_APP_ID,
//   measurementId: FB_MEASUREMENT_ID
// }

// const app = initializeApp(firebaseConfig)

// export const fbAuth = getAuth(app)
// export const fbFirestore = getFirestore(app)
