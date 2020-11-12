import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAYAp7PtunIfxk-BnETyel91LezAwLnwHw",
  authDomain: "api-key-sample.firebaseapp.com",
  databaseURL: "https://api-key-sample.firebaseio.com",
  projectId: "api-key-sample",
  storageBucket: "api-key-sample.appspot.com",
  messagingSenderId: "674261490837",
  appId: "1:674261490837:web:50ab0c4f52aa584c3acf9c",
  measurementId: "G-2QLZLLFV1G",
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;