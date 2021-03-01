import * as firebase from 'firebase'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCbVoOAsRpmuCh_maC_QgIe-LpUpjKKfeQ',
  authDomain: 'procommerce-58a26.firebaseapp.com',
  projectId: 'procommerce-58a26',
  storageBucket: 'procommerce-58a26.appspot.com',
  messagingSenderId: '252602148790',
  appId: '1:252602148790:web:8d2f13a81d008296418317',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
