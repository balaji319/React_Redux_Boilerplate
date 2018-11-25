import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCRzFifaeZFzVVETSR9303Ov53w_lQoe1c",
    authDomain: "net-ninja-bee18.firebaseapp.com",
    databaseURL: "https://net-ninja-bee18.firebaseio.com",
    projectId: "net-ninja-bee18",
    storageBucket: "net-ninja-bee18.appspot.com",
    messagingSenderId: "97802292053"
  };

  firebase.initializeApp(config);

  firebase.firestore().settings({timestampsInSnapshots:true});

  export default  firebase;