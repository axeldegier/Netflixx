import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCiFa6JPBUrawr4yvd9EK98oITV_QXyUBs",
    authDomain: "netflix-react-ddb01.firebaseapp.com",
    projectId: "netflix-react-ddb01",
    storageBucket: "netflix-react-ddb01.appspot.com",
    messagingSenderId: "360892587564",
    appId: "1:360892587564:web:b125ab241389e3f17e7b89"
};

const firebase = Firebase.initializeApp
(config);

export { firebase };
