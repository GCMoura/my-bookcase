import firebase from 'firebase'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyB9iQFoxg5BAuvZCcmmAgdiqDws42e8vlo",
  authDomain: "mybookcaseproject.firebaseapp.com",
  projectId: "mybookcaseproject",
  storageBucket: "mybookcaseproject.appspot.com",
  messagingSenderId: "1039419894988",
  appId: "1:1039419894988:web:b2fb308a804e9d98456669",
  measurementId: "G-7X5GBH4209"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase