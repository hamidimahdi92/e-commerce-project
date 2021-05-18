import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// const config = {
//   apiKey: "AIzaSyB6c3BRHCxCrge9qPZ5MyDlb_OcW2kUxho",
//   authDomain: "crwn-db-8df9e.firebaseapp.com",
//   projectId: "crwn-db-8df9e",
//   storageBucket: "crwn-db-8df9e.appspot.com",
//   messagingSenderId: "713971990795",
//   appId: "1:713971990795:web:5080c48e6e92e6b589a20e",
//   measurementId: "G-CLWSWR0RWJ",
// };
const config = {
    apiKey: "AIzaSyBBpfSauhAGkXBtyol5m6LubfZAzoLMH7o",
    authDomain: "crwn-app-dfe82.firebaseapp.com",
    projectId: "crwn-app-dfe82",
    storageBucket: "crwn-app-dfe82.appspot.com",
    messagingSenderId: "595872155716",
    appId: "1:595872155716:web:5d5d55f2c0a028ebab1411",
    measurementId: "G-4P1ZSH6VNZ"
};
 
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      }, () => {
        console.log(userAuth)
      })  
      
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default signInWithGoogle;
