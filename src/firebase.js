import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDwMtGKHnrcdJXYRAuXTnKrT462tpvFdNU",
  authDomain: "ecommerce-site-3f6c47.firebaseapp.com",
  projectId: "ecommerce-site-3f6c47",
  storageBucket: "ecommerce-site-3f6c47.firebasestorage.app",
  messagingSenderId: "408248737580",
  appId: "1:408248737580:web:467759accd634df21a1689"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
