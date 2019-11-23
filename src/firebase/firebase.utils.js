import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAQ5PhY4H4hp_1Sy-TKkrjM_Qd9hUIYx70",
  authDomain: "fast-sales-db.firebaseapp.com",
  databaseURL: "https://fast-sales-db.firebaseio.com",
  projectId: "fast-sales-db",
  storageBucket: "fast-sales-db.appspot.com",
  messagingSenderId: "230003527384",
  appId: "1:230003527384:web:02cc402f0c9f61be3791ad",
  measurementId: "G-48FTRZQZ4J"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdDate,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user", error.message);
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

export default firebase;
