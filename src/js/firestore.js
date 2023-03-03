import { initializeApp } from "firebase/app";
import {
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    updateDoc,
} from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import * as stores from "./stores";

let fdb;

export function initFirebase() {
    const firebaseConfig = {
        apiKey: "AIzaSyBR-UKnuOQ4eXJfhVLAT_MYDYDSiLDuh-s",
        authDomain: "scouting-6e3b0.firebaseapp.com",
        projectId: "scouting-6e3b0",
        storageBucket: "scouting-6e3b0.appspot.com",
        messagingSenderId: "1096923351613",
        appId: "1:1096923351613:web:4f2313a3d412a18f5c3854",
        measurementId: "G-4FEG1F5QK5",
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    stores.fb.set(db);

    const auth = getAuth();
    signInWithEmailAndPassword(auth, "", "").then((userCredential) => {
        console.log("Successfully signed in");
    });

    getEvents(db)
        .then((val) => {
            stores.events.set(val);
        })
        .catch((err) => {
            console.log("could not retrieve events " + err);
        });

    getTeams(db)
        .then((val) => {
            stores.teams.set(val);
        })
        .catch((err) => {
            console.log("could not retrieve teams " + err);
        });

    fdb = db;
}

async function getEvents(db) {
    let events = [];
    const eventsSnapshot = await getDocs(collection(db, "events")).catch((err) =>
        console.log("could not read")
    );
    eventsSnapshot.forEach((doc) => {
        events.push(doc.id);
    });

    return Promise.resolve(events);
}

async function getTeams(db) {
    let teams = [];
    const teamsSnapshot = await getDocs(collection(db, "teams")).catch((err) =>
        console.log("could not read")
    );
    teamsSnapshot.forEach((doc) => {
        let temp = {
            teamNumber: doc.id,
            teamName: doc.data().apiInfo.nameShort,
        };
        teams.push(temp);
    });

    return Promise.resolve(teams);
}

// Returns the pit scouting data for a team
export async function getRobotData(teamNumber) {
    const docRef = doc(fdb, "/teams", teamNumber);
    const robotDataSnapshot = await getDoc(docRef);
    const robotInfo = robotDataSnapshot.get("robotInfo");

    return Promise.resolve(robotInfo);
}

// Uploads robotInfo to the database
export async function saveRobotData(teamNumber, robotData) {
    const docRef = doc(fdb, "/teams", teamNumber);
    updateDoc(docRef, {
        robotInfo: robotData
    }).then(() => {
        return Promise.resolve(true)
    }).catch(err => {
        console.log(`failed to save robot data to ${teamNumber}\n`, err)
        return Promise.reject(false)
    })
}