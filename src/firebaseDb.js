import firebase from 'firebase';
//import firestore from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXUUGOQSDn81CWYrPAnzi2NT7LgoXtNrc",
    authDomain: "personas-app-c9263.firebaseapp.com",
    projectId: "personas-app-c9263",
    storageBucket: "personas-app-c9263.appspot.com",
    messagingSenderId: "634707691241",
    appId: "1:634707691241:web:bcebc2d6cd196d22d85278"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true }); 
  //export const db = firebaseApp.firestore();
  export default firebaseApp.firestore();

  //export const dbauth = firebaseApp.auth();