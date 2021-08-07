import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAsaNJudAtko2LDj1Trzg_Czn_1Itw5fCY",
	authDomain: "linkedin-clone-d5a07.firebaseapp.com",
	projectId: "linkedin-clone-d5a07",
	storageBucket: "linkedin-clone-d5a07.appspot.com",
	messagingSenderId: "136353623390",
	appId: "1:136353623390:web:3ff7623d265bd0535d73cf"
 };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};