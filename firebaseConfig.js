import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAoy6VdPAyPTGqyqUOMKGeYEEq8lcfFn50",
  authDomain: "booster-master-f137c.firebaseapp.com",
  projectId: "booster-master-f137c",
  storageBucket: "booster-master-f137c.appspot.com",
  messagingSenderId: "578288057723",
  appId: "1:578288057723:web:d04cfd48a04f0374dcd1de",
  measurementId: "G-2X3DWGRZRJ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();