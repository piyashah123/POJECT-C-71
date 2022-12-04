import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbIbMOsbt4zGYo7RgcNs_VrIveCd99uO8",
    authDomain: "complaint-fourm-4fa34.firebaseapp.com",
    projectId: "complaint-fourm-4fa34",
    storageBucket: "complaint-fourm-4fa34.appspot.com",
    messagingSenderId: "531300646729",
    appId: "1:531300646729:web:99cfcd1b5de2afd8096498"
  };
  
  
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
