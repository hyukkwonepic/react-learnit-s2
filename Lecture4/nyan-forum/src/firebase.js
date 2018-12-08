import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  // firebase cofig
};
firebase.initializeApp(config);

const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});

export {
  db
};