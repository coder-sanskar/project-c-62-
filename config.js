import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBG88T3C4fugPucUNtd7Za95-jtxB4APxI",
  authDomain: "school-attendance-app-28a4e.firebaseapp.com",
  databaseURL: "https://school-attendance-app-28a4e-default-rtdb.firebaseio.com",
  projectId: "school-attendance-app-28a4e",
  storageBucket: "school-attendance-app-28a4e.appspot.com",
  messagingSenderId: "127266917197",
  appId: "1:127266917197:web:c67eb31f61016f2410c504",
  measurementId: "G-6DKS339RZS"
  };


// Initialize Firebase
let app =   firebase.initializeApp(firebaseConfig);
export default app.database();
