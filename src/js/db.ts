let scoutingDB: IDBDatabase
let dbReady: boolean = false

/**
 * This function attempts to access the IndexedDB of the browser.
 * If IndexedDB is in the browser, then an attempt to open the ScoutingDB will
 * be made and set to scoutingDB. If the request to open the database fails then
 * scoutingDB will be set to null.
 */
async function initDB(): Promise<boolean> {
	return new Promise<boolean>((resolve, reject) => {

		const indexedDB = window.indexedDB

		if (!indexedDB) {
			console.log("IndexedDB could not be found in this browser.");
			reject("IndexedDB not in browser")
		}
		const scoutingDBRequest = indexedDB.open("ScoutingDB", 1);
		scoutingDBRequest.onupgradeneeded = () => {
			scoutingDB = scoutingDBRequest.result
			scoutingDB.createObjectStore("teams", { keyPath: "teamNumber" })
			scoutingDB.createObjectStore("robots", { keyPath: "teamNumber" })
		}
		scoutingDBRequest.onsuccess = () => {
			scoutingDB = scoutingDBRequest.result
			dataExists().then(success => {
				if (success) {
					console.log("Mustangs found. No need to populate")
				} else {
					console.log("Mustangs not found...populating now")
					populateDB()
				}
				dbReady = true
				resolve(true)
			}).catch(reason => {
				console.log("dataExists failed:", reason)
				reject(`Checking for data failed: ${reason}`)
			})
		}
		scoutingDBRequest.onerror = (event) => {
			console.log("There was an error getting the Scouting database", event)
			reject("Could not open Scouting database")
		}
	})
}

/**
 * Checks if Mechanical Mustangs is in the database. If it is, then it is safe
 * to assume data was loaded into the database at one point.
 * @returns resolves to true if Mechanical Mustangs is in the database
 */
async function dataExists(): Promise<boolean> {
	console.log("dataExists transaction")
	const transaction = scoutingDB.transaction("teams", "readwrite")
	const teamsStore = transaction.objectStore("teams")
	const getMustangs: IDBRequest<FRCTeam> = teamsStore.get(3314)
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
	console.log("populateDB transaction")
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
export async function getTeams(): Promise<FRCTeam[]> {
	console.log("Get Teams transaction")
	if (!dbReady) {
		await initDB().catch(reason => {
			console.log(reason)
		})
	}
	const transaction = scoutingDB.transaction("teams", "readonly")
	const teamsStore = transaction.objectStore("teams")
	const teamsQuery: IDBRequest<FRCTeam[]> = teamsStore.getAll()
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
export async function getRobotInfo(teamNumber: number): Promise<FRCRobot> {
	console.log("Get Robot Info transaction")
	const transaction = scoutingDB.transaction("robots", "readonly")
	const robotStore = transaction.objectStore("robots")
	const robotQuery: IDBRequest<FRCRobot> = robotStore.get(teamNumber)
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

type FRCEvent = {
	eventNumber:number,
	matches: [
		{
			matchNumber:number,
			scoutedTeams: [
				{
					teamNumber:number,
					allianceColor:string,
					highScored:number,
					highMissed:number
				}
			]
		}
	]
}

type FRCMatch = {
	eventNumber:number,
	matchNumber:number,
	scoutedTeams: [
		{
			teamNumber:number,
			highScored:number,
			highAttempts:number
		}
	]
}

/**
 * Retrieves a team's scoring data for the given event, match, and team
 * @param eventNum Number that identifies the event
 * @param matchNum Number that identifies the match in the current event
 * @param teamNum Number that identifies the team
 */
export async function getMatchScoring(eventNum:number, matchNum:number, teamNum:number) {

}

/**
 * Retrieves all the scouted information related to the event number.
 * If the event has no local entry `false` is resolved to the Promise.
 * @param eventNum Event number identifier
 * @returns a
 */
export async function getEvent(eventNum:number): Promise<FRCEvent|boolean> {
	console.log("Get event transaction")
	const transaction = scoutingDB.transaction("scoring", "readonly")
	const scoringStore = transaction.objectStore("scoring")
	const eventQuery: IDBRequest<FRCEvent> = scoringStore.get(eventNum)
	return new Promise<FRCEvent|boolean>((resolve, reject) => {
		eventQuery.onsuccess = () => {
			if (eventQuery.result === undefined) {
				resolve(false)
			} else {
				resolve(eventQuery.result)
			}
		}
		eventQuery.onerror = () => {
			reject("Error in event query")
		}
	})
}

type FRCTeam = {
	teamNumber: number,
	teamName: string,
	ppg:number
}

const localTeams: FRCTeam[] = [
	{
		teamNumber: 3314,
		teamName: "Mechanical Mustangs",
		ppg: 3.14
	},
	{
		teamNumber: 254,
		teamName: "Cheesy Poofs",
		ppg: 3.14

	},
	{
		teamNumber: 9000,
		teamName: "Testing Team",
		ppg: 3.14
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