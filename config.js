import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCSsXFBWWPScTeFas3WM2WjXaqcOiRBAUA",
  authDomain: "wilyapp-6b413.firebaseapp.com",
  projectId: "wilyapp-6b413",
  storageBucket: "wilyapp-6b413.appspot.com",
  messagingSenderId: "531794257026",
  appId: "1:531794257026:web:984cbeb4049330c0eec09b"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();