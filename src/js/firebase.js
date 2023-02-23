import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyBR-UKnuOQ4eXJfhVLAT_MYDYDSiLDuh-s",
	authDomain: "scouting-6e3b0.firebaseapp.com",
	projectId: "scouting-6e3b0",
	storageBucket: "scouting-6e3b0.appspot.com",
	messagingSenderId: "1096923351613",
	appId: "1:1096923351613:web:4f2313a3d412a18f5c3854",
	measurementId: "G-4FEG1F5QK5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// import { getAuth, signInAnonymously } from "firebase/auth";

// const querySnapshot = await getDocs(collection(db, 'events'));
// querySnapshot.forEach((doc) => {
// 	console.log(doc.get('teams-2'));
// });

// const auth = getAuth()
// signInAnonymously(auth)
// 	.then(() => {
// 		console.log("Signed in successfully")
// 		const result = getDocs(collection(db, 'events'))
// 		result.then((doc) => {
// 			doc.forEach((result) => {
// 				console.log(`${result.id} => ${result.data}`)
// 			})
// 		}).catch((error) => {
// 			console.log(`${error.code} ${error.message}`)
// 		})
// 	})
// 	.catch((error) => {
// 		const errorCode = error.code;
// 		const errorMessage = error.message;
// 		console.log(errorCode)
// 		console.log(errorMessage)
// 	});
