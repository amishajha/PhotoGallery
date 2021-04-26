
import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore' ;
var firebaseConfig = {
    apiKey: "AIzaSyB_oQHVk-Kz0IYPFFlB2m8viytD6K3AgyU",
    authDomain: "firegram-8bd2c.firebaseapp.com",
    projectId: "firegram-8bd2c",
    storageBucket: "firegram-8bd2c.appspot.com",
    messagingSenderId: "806210042862",
    appId: "1:806210042862:web:08022359f22e47b2522cff",
    measurementId: "G-NBPCKNEVXE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const projectStorage=firebase.storage();
  const projectFirestore=firebase.firestore();
  const timestamp=firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };