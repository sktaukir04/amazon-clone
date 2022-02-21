import { initializeApp } from 'firebase/app';
// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        apiKey: "AIzaSyCxyzmI-noFRxdKt1zMS4GxuF65-LM3Z7c",
        authDomain: "clone-c8a99.firebaseapp.com",
        projectId: "clone-c8a99",
        storageBucket: "clone-c8a99.appspot.com",
        messagingSenderId: "383203708622",
        appId: "1:383203708622:web:7ad1079655103a7ccaca9f",
        measurementId: "G-R2M70QZ05H",
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };

// import firebase from "firebase";

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   //...
//   apiKey: "AIzaSyCxyzmI-noFRxdKt1zMS4GxuF65-LM3Z7c",
//   authDomain: "clone-c8a99.firebaseapp.com",
//   projectId: "clone-c8a99",
//   storageBucket: "clone-c8a99.appspot.com",
//   messagingSenderId: "383203708622",
//   appId: "1:383203708622:web:7ad1079655103a7ccaca9f",
//   measurementId: "G-R2M70QZ05H"
// };

// const app = initializeApp(firebaseConfig);

// // const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export {auth};





