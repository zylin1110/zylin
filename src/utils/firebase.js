import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyB7XsOERvN6qDl0lamegt2kUWKVkb5oyec",
  authDomain: "wbfinal-12fc8.firebaseapp.com",
  projectId: "wbfinal-12fc8",
  storageBucket: "wbfinal-12fc8.appspot.com",
  messagingSenderId: "334628305856",
  appId: "1:334628305856:web:e1befc0c479988c2f36625"
};

firebase.initializeApp(firebaseConfig);

export default firebase;