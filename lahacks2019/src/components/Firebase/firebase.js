import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
   apiKey: 'AIzaSyAqPumgvDlp7RdkDcWo8nKs7weVbtJUBOg',
   authDomain: 'labacks.firebaseapp.com',
   databaseURL: 'https://labacks.firebaseio.com',
   projectId: 'labacks',
   storageBucket: 'labacks.appspot.com',
   messagingSenderId: '378004478457',
};

firebase.initializeApp(config);

const firestore = firebase.firestore();

const settings = {
  timestampsInSnapshots: true,
};

firestore.settings(settings);

const lahacks = firestore.collection('lahacks');

export {
  firebase,
  firestore,
  lahacks,
};
