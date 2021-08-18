import firebase from 'firebase';
//import firestore from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaktUynD46wncj925HcSkaldTaeitq6ac",
    authDomain: "spdesweb.firebaseapp.com",
    projectId: "spdesweb",
    storageBucket: "spdesweb.appspot.com",
    messagingSenderId: "150894209047",
    appId: "1:150894209047:web:bc07dc275548aedeb0d452"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true }); 
  //export const db = firebaseApp.firestore();
  export default firebaseApp.firestore();

  //export const dbauth = firebaseApp.auth();