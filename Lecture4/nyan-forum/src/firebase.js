import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyC1ZQU5VN3PJL_T2uoIV5babNnrEcdtLZk",
  authDomain: "nyan-forum-alex.firebaseapp.com",
  databaseURL: "https://nyan-forum-alex.firebaseio.com",
  projectId: "nyan-forum-alex",
  storageBucket: "nyan-forum-alex.appspot.com",
  messagingSenderId: "679945302874"
};
firebase.initializeApp(config);

const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});

export {
  db
};