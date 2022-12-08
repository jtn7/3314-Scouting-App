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
		scoutingDB.createObjectStore("robots", {keyPath: "teamNumber"})
	}
	scoutingDBRequest.onsuccess = () => {
		scoutingDB = scoutingDBRequest.result
		scoutingSuccess = true
		dataExists().then(success => {
			if (success) {
				console.log("Mustangs found. No need to populate")
			} else {
				console.log("Mustangs not found...populating now")
				populateDB()
			}
		}).catch(reason => {
			console.log(reason)
		})
	}
	scoutingDBRequest.onerror = (event) => {
		scoutingSuccess = false;
		console.log("There was an error getting the Scouting database", event)
	}
}

/**
 * Checks if Mechanical Mustangs is in the database. If it is, then it is safe
 * to assume data was loaded into the database at one point.
 * @returns resolves to true if Mechanical Mustangs is in the database
 */
async function dataExists(): Promise<boolean> {
	const transaction = scoutingDB.transaction("teams", "readwrite")
	const teamsStore = transaction.objectStore("teams")
	const getMustangs:IDBRequest<FRCTeam> = teamsStore.get(3314)
	return new Promise((resolve, reject) => {
		getMustangs.onerror = (event) => {
			reject(`Error while getting a team: ${event}`)
		}
		getMustangs.onsuccess = () => {
			if (getMustangs.result?.teamNumber === 3314) {
				resolve(true)
			} else {
				resolve(false)
			}
		}
	})
}

/**
 * Fills the scoutingDB with the localTeams entries
 */
function populateDB() {
	const transaction = scoutingDB.transaction(["teams", "robots"], "readwrite")
	const teamsStore = transaction.objectStore("teams")
	localTeams.forEach(team => {
		teamsStore.put(team)
	})
	const robotsStore = transaction.objectStore("robots")
	localRobots.forEach(robot => {
		robotsStore.put(robot)
	})
}

/**
 * This function queries the database for all teams.
 * @returns All FRC Teams in database
 */
export async function getTeams():Promise<FRCTeam[]> {
	const transaction = scoutingDB.transaction("teams", "readonly")
	const teamsStore = transaction.objectStore("teams")
	const teamsQuery:IDBRequest<FRCTeam[]> = teamsStore.getAll()
	return new Promise<FRCTeam[]>((resolve, reject) => {
		teamsQuery.onsuccess = () => {
			if (teamsQuery.result === undefined) {
				reject("getTeams Query was successful but result was undefined")
			} else {
				resolve(teamsQuery.result)
			}
		}
		teamsQuery.onerror = (event) => {
			reject(`getTeams Query could not be completed: ${event}`)
		}
	})
}

/**
 * Queries database for info on the team's robot
 * @param teamNumber
 */
export async function getRobotInfo(teamNumber:number):Promise<FRCRobot> {
	const transaction = scoutingDB.transaction("robots", "readonly")
	const robotStore = transaction.objectStore("robots")
	const robotQuery:IDBRequest<FRCRobot> = robotStore.get(teamNumber)
	return new Promise<FRCRobot>((resolve, reject) => {
		robotQuery.onsuccess = () => {
			if (robotQuery.result === undefined) {
				reject("getTeams Query was successful but result was undefined")
			} else {
				resolve(robotQuery.result)
			}
		}
		robotQuery.onerror = (event) => {
			reject(`getTeams Query could not be completed: ${event}`)
		}
	})
}

type FRCTeam = {
	teamNumber: number,
	teamName: string,
	wins: number,
	losses: number
}

const localTeams:FRCTeam[] = [
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

type FRCRobot = {
	teamNumber: number,
	teamName: string,
	driveTrain: string,
	climbRange: number,
	canScoreHigh: boolean,
	canScoreLow: boolean,
}

let localRobots = [
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