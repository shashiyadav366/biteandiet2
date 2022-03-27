import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {

  apiKey: "AIzaSyCpjSisGMYrvBXOLKQ4ULaeNmK5zU_8K-w",
  authDomain: "shashichatapp.firebaseapp.com",
  databaseURL: "https://shashichatapp-default-rtdb.firebaseio.com",
  projectId: "shashichatapp",
  storageBucket: "shashichatapp.appspot.com",
  messagingSenderId: "837915550458",
  appId: "1:837915550458:web:df32edf2030c97e2159f43"
};
// Initialize Firebase
const FirebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default FirebaseApp;
export { db };
