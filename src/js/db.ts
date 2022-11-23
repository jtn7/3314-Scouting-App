let scoutingDB:IDBDatabase
let scoutingSuccess:boolean = false

/**
 * This function attempts to access the IndexedDB of the browser.
 * If IndexedDB is in the browser, then an attempt to open the ScoutingDB will
 * be made and set to scoutingDB. If the request to open the database fails then
 * scoutingDB will be set to null.
 */
function initDB():void {
	const indexedDB = window.indexedDB

	if (!indexedDB) {
		console.log("IndexedDB could not be found in this browser.");
		return
	}
	const scoutingDBRequest = indexedDB.open("ScoutingDB", 1);
	scoutingDBRequest.onupgradeneeded = () => {
		scoutingDB = scoutingDBRequest.result
		scoutingDB.createObjectStore("teams", {keyPath: "teamNumber"})
		populateDB()
	}
	scoutingDBRequest.onsuccess = () => {
		scoutingDB = scoutingDBRequest.result
		scoutingSuccess = true
		dbExists().then(success => {
			if (success) {
				console.log("Mustangs found")
			} else {
				populateDB()
			}
		}).catch(reason => {
			console.log(reason)
		})
		// populateDB()
	}
	scoutingDBRequest.onerror = () => {
		scoutingSuccess = false;
		console.log("There was an error getting the CarsDatabase")
	}
}

/**
 * Sends requests to check if there's data in the database. If there is data in
 * the DB, then a callback is set for updating the database with firebase scouting
 * data and FRC data.
 * @returns resolves to true if there's existing data in the database
 */
async function dbExists(): Promise<boolean> {
	const transaction = scoutingDB.transaction("teams", "readwrite")
	const teamsStore = transaction.objectStore("teams")
	const getMustangs = teamsStore.get(3314)
	return new Promise((resolve, reject) => {
		getMustangs.onerror = (event) => {
			console.log("getMustangs onerror entered")
			reject(`Could not get mustangs from teams: ${event}`)
		}
		getMustangs.onsuccess = () => {
			console.log("getMustangs succeeded")
			resolve(true)
		}
	})
	
	// const transaction:IDBTransaction = scoutingDB.transaction("teams", "readonly")
	// const teamsStore = transaction.objectStore("teams")
	// const getMustangsQuery = teamsStore.get(3314)
}

function populateDB() {
	const transaction = scoutingDB.transaction("teams", "readwrite")
	const teamsStore = transaction.objectStore("teams")
	localTeams.forEach(team => {
		teamsStore.put(team)
	})
}

const localTeams = [
	{
		teamNumber: 3314,
		teamName: "Mechanical Mustangs",
		wins: 3,
		losses: 3
	},
	{
		teamNumber: 254,
		teamName: "Cheesy Poofs",
		wins: 6,
		losses: 0
	},
	{
		teamNumber: 9000,
		teamName: "Testing Team",
		wins: 0,
		losses: 6
	}
]

let robotInfo = [
	{
		teamNumber: 3314,
		teamName: "Mechanical Mustangs",
		driveTrain: "Differential",
		climbRange: 4,
		canScoreHigh: true,
		canScoreLow: true
	},
	{
		teamNumber: 254,
		teamName: "Cheesy Poofs",
		driveTrain: "Swerve",
		climbRange: 4,
		canScoreHigh: true,
		canScoreLow: true
	},
	{
		teamNumber: 8000,
		teamName: "Test",
		driveTrain: "Differential",
		climbRange: 0,
		canScoreHigh: false,
		canScoreLow: true,
		falcons: true,
		weight: false,
		positionStartedInAuto: false,

	}
]

// This will request the CarsDatabase and eventually will set the carsDB variable
initDB()