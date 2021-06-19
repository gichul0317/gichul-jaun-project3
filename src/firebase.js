import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBQQbctpvrzhQW_qtImpD79uFi7zLsyCaQ',
  authDomain: 'vid-monster.firebaseapp.com',
  projectId: 'vid-monster',
  storageBucket: 'vid-monster.appspot.com',
  messagingSenderId: '713085845136',
  appId: '1:713085845136:web:d146e185f7a9895a1ea215',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
