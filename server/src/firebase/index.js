import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyBvCLZPl8w3Ie3kTAJ-iQHEgO2FZSpLvKo",
  authDomain: "business-card-app-1a2d0.firebaseapp.com",
  projectId: "business-card-app-1a2d0",
  storageBucket: "business-card-app-1a2d0.appspot.com",
  messagingSenderId: "817636275535",
  appId: "1:817636275535:web:d9f589257137f82fe3413a",
  measurementId: "G-ZK7RKMVYS0"
};

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
