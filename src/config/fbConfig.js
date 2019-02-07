import firebase from 'firebase/app'
import 'firebase/firebase'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyBYHyDhzNG3p9zAbRdU68TnhdJrN2MW2sI",
    authDomain: "op-website-86adf.firebaseapp.com",
    databaseURL: "https://op-website-86adf.firebaseio.com",
    projectId: "op-website-86adf",
    storageBucket: "op-website-86adf.appspot.com",
    messagingSenderId: "594437571128"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase