import { initializeApp } from "firebase/app";
import {
    collection,
    doc,
    setDoc,
    getDoc,
    getDocs,
    getFirestore,
    updateDoc,
} from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import * as stores from "./stores";

let fdb;

export async function initFirebase(password) {
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

    const auth = getAuth()
    await signInWithEmailAndPassword(auth, '3314@frc.com', password).then((userCredential) => {
        console.log("Successfully signed in")
    }).catch(err => {
        console.log("Could not sign in:", err)
        return Promise.reject('Sign-in failed')
    })

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
            return Promise.reject('Failed to get teams')
        })

    fdb = db

    return Promise.resolve('Successful initialization')
}

async function getEvents(db) {
    let events = [];
    const eventsSnapshot = await getDocs(collection(db, "events")).catch((err) =>
        console.log("could not read")
    );
    eventsSnapshot.forEach((doc) => {
        const temp = {
            name: doc.id,
            code: doc.data().eventCode
        }
        events.push(temp);
    });

    return Promise.resolve(events);
}

export async function getEventTeams(eventName) {
    const docRef = doc(fdb, "/events", eventName);
    const eventSnapshot = await getDoc(docRef);
    const teams = eventSnapshot.get("teams");
    const teamList = []
    teams.forEach(team => {
        const temp = {
            teamNumber: team.teamNumber.toString(),
            teamName: team.nameShort
        }
        teamList.push(temp);
    });

    return Promise.resolve(teamList);
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
    const docRef = doc(fdb, "/teams", teamNumber)
    updateDoc(docRef, {
        robotInfo: robotData
    }).then(() => {
        return Promise.resolve(true)
    }).catch(err => {
        console.log(`failed to save robot data to ${teamNumber}\n`, err)
        return Promise.reject(false)
    })
}

export async function saveMatchData(teamNumber, matchNumber, eventCode, matchDetails) {
    const eventMatchDoc = doc(fdb, `/teams/${teamNumber}/matches`, eventCode)

    const writeData = {}
    writeData[matchNumber] = {
        matchDetails
    }
    setDoc(eventMatchDoc, writeData, {merge:true})
    .then(() => {
        return Promise.resolve(true)
    }).catch(err => {
        console.log(`failed to save match ${teamNumber} #${matchNumber}: ${err}`)
        return Promise.reject(err)
    })
}

export async function getMatches(teamNumber, eventCode) {
    let matches = []
    const matchesDoc = doc(fdb, `/teams/${teamNumber}/matches`, eventCode)
    const matchesSnapshot =  await getDoc(matchesDoc)

    Object.entries(matchesSnapshot.data()).forEach(([key, value]) => {
        const matchDetails = value.matchDetails
        const temp = {
            matchNumber: key,
            team: `${teamNumber}, ${matchDetails.teamPartner1}, ${matchDetails.teamPartner2}`,
            matchDetails
        }
        matches.push(temp)
    });

    // matchesSnapshot.forEach((doc) => {
    //     let temp = {
    //         matchNumber: doc.id,
    //         team: [],
    //         matchDetails: doc.data()
    //     };
    //     matches.push(temp);
    // });

    return Promise.resolve(matches);
}