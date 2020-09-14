import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBCs3WNvxFZjvAISt7a2buFiEP7Fn9BKYc",
    authDomain: "e-clone-4dfa5.firebaseapp.com",
    databaseURL: "https://e-clone-4dfa5.firebaseio.com",
    projectId: "e-clone-4dfa5",
    storageBucket: "e-clone-4dfa5.appspot.com",
    messagingSenderId: "509797342892",
    appId: "1:509797342892:web:e664f5cf303ed11446c909",
    measurementId: "G-0EL1W32827"
})

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth}