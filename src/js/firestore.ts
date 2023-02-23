import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, onSnapshot, doc, setDoc } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import * as stores from './stores'

function signIn(email, password) {
	const auth = getAuth();
	signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
		console.log('Successfully signed in')
	})
}

function initFirebase() {
	const firebaseConfig = {
		apiKey: "AIzaSyBR-UKnuOQ4eXJfhVLAT_MYDYDSiLDuh-s",
		authDomain: "scouting-6e3b0.firebaseapp.com",
		projectId: "scouting-6e3b0",
		storageBucket: "scouting-6e3b0.appspot.com",
		messagingSenderId: "1096923351613",
		appId: "1:1096923351613:web:4f2313a3d412a18f5c3854",
		measurementId: "G-4FEG1F5QK5"
	}

	const app = initializeApp(firebaseConfig)
	const db = getFirestore(app)

	stores.fb.set(db)
}

