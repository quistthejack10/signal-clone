import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCuovP-Z1Dwc7ymyC8Dsy1APbqIWR5nQ5Y",
    authDomain: "signal-clone-a2c42.firebaseapp.com",
    projectId: "signal-clone-a2c42",
    storageBucket: "signal-clone-a2c42.appspot.com",
    messagingSenderId: "521831072161",
    appId: "1:521831072161:web:91aee744b540ccc9d04be0"
  };

  let app;

  if (firebase.apps.length === 0){
      app = firebase.initializeApp(firebaseConfig);
  } else {
      app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export { db, auth };
