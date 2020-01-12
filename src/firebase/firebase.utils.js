import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB4jE0OEe_pn-uAPWRFyLipUiTMaTPm5HE",
  authDomain: "e-sales-db.firebaseapp.com",
  databaseURL: "https://e-sales-db.firebaseio.com",
  projectId: "e-sales-db",
  storageBucket: "e-sales-db.appspot.com",
  messagingSenderId: "433565797064",
  appId: "1:433565797064:web:c84678a46ef16f477ff3fd",
  measurementId: "G-X188E10Y4L"
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
