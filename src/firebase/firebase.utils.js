import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB6c3BRHCxCrge9qPZ5MyDlb_OcW2kUxho",
    authDomain: "crwn-db-8df9e.firebaseapp.com",
    projectId: "crwn-db-8df9e",
    storageBucket: "crwn-db-8df9e.appspot.com",
    messagingSenderId: "713971990795",
    appId: "1:713971990795:web:5080c48e6e92e6b589a20e",
    measurementId: "G-CLWSWR0RWJ"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default signInWithGoogle;