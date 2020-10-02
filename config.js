import firebase from 'firebase';
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyB6jKpv-_zw4SI-7UYwWkffNcuLJbyIR94",
  authDomain: "storyhub-207d4.firebaseapp.com",
  databaseURL: "https://storyhub-207d4.firebaseio.com",
  projectId: "storyhub-207d4",
  storageBucket: "storyhub-207d4.appspot.com",
  messagingSenderId: "6336223640",
  appId: "1:6336223640:web:9e851041223fe31f8133ed"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore();