import Rebase from "re-base";
import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAobRrMFvd4ZHv3gQ4m1Z2tNz0Iw6rtmHw",
  authDomain: "whos-turn-4827d.firebaseapp.com",
  databaseURL: "https://whos-turn-4827d.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp };

// default export
export default base;
