import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const {
  FB_API_KEY,
  FB_AUTH_DOMAIN,
  FB_DATABASE_URL,
  FB_PROJECT_ID,
  FB_STORAGE_BUCKET,
  FB_MESSAGING_SENDER_ID,
  FB_APP_ID,
  FB_MEASUREMENT_ID
} = process.env

const firebaseConfig = {
  apiKey: FB_API_KEY,
  authDomain: FB_AUTH_DOMAIN,
  databaseURL: FB_DATABASE_URL,
  projectId: FB_PROJECT_ID,
  storageBucket: FB_STORAGE_BUCKET,
  messagingSenderId: FB_MESSAGING_SENDER_ID,
  appId:FB_APP_ID,
  measurementId: FB_MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const firestore = getFirestore(app)
