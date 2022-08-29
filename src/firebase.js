import firebase
 from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDQ3a_-QFA1O88bwQMNVkd3df_YPGkPYFI",
  authDomain: "react-firebase-email-log-6d8cc.firebaseapp.com",
  projectId: "react-firebase-email-log-6d8cc",
  storageBucket: "react-firebase-email-log-6d8cc.appspot.com",
  messagingSenderId: "317717977523",
  appId: "1:317717977523:web:4645f7c71d7ad102d853c6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { auth };
export default db;