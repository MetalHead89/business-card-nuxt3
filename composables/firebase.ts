import { initializeApp } from 'firebase/app'
import { getAuth, setPersistence, inMemoryPersistence } from 'firebase/auth'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'

export default () => {
  if (!process.client) {
    return
  }

  const config = useRuntimeConfig()

  const {
    FB_API_KEY,
    FB_AUTH_DOMAIN,
    FB_DATABASE_URL,
    FB_PROJECT_ID,
    FB_STORAGE_BUCKET,
    FB_MESSAGING_SENDER_ID,
    FB_APP_ID,
    FB_MEASUREMENT_ID
  } = config.public.firebase

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
  const fbAuth = getAuth(app)
  setPersistence(fbAuth, inMemoryPersistence)

  return { fbAuth, signInWithEmailAndPassword, signOut }
}
