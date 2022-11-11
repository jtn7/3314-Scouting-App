let carsDB = null

// Get indexedDB from browser
function getDB() {
	const indexedDB =
	window.indexedDB ||
	window.mozIndexedDB ||
	window.webkitIndexedDB ||
	window.msIndexedDB ||
	window.shimIndexedDB;

	if (!indexedDB) {
		console.log("IndexedDB could not be found in this browser.");
		return false;
	}

	const carsDBRequest = indexedDB.open("CarsDatabase", 1);

	let success = false

	carsDBRequest.onsuccess = (event) => {
		success = true
		carsDB = carsDBRequest.result
	}

	return success
}

if (getDB() === true) {
	if (dbExists()) {
		// If the database exists we should now do... something
	} else {
		// Populate the database with data from FRC all we really need is the numbers and name
	}
}

// dbExists checks for existing team data
function dbExists() {
	return true
}

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
		canScoreLow: true
		falcons: true,
		weight: false,
		positionStartedInAuto,
		
	}
]

