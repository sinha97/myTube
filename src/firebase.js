import firebase from 'firebase/app';

import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDiEu-2-jj1Q6lh6ttBy8iTWzAFB3YCJUI",
  authDomain: "myytube-996e4.firebaseapp.com",
  projectId: "myytube-996e4",
  storageBucket: "myytube-996e4.appspot.com",
  messagingSenderId: "603625614171",
  appId: "1:603625614171:web:c0ecb1cf535f6bab69887e",
  measurementId: "G-0KRC6E3094"
};


firebase.initializeApp(firebaseConfig);

export default firebase.auth();