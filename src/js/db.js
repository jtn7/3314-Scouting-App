var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let scoutingDB;
let dbReady = false;
/**
 * This function attempts to access the IndexedDB of the browser.
 * If IndexedDB is in the browser, then an attempt to open the ScoutingDB will
 * be made and set to scoutingDB. If the request to open the database fails then
 * scoutingDB will be set to null.
 */
function initDB() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const indexedDB = window.indexedDB;
            if (!indexedDB) {
                console.log("IndexedDB could not be found in this browser.");
                reject("IndexedDB not in browser");
            }
            const scoutingDBRequest = indexedDB.open("ScoutingDB", 1);
            scoutingDBRequest.onupgradeneeded = () => {
                scoutingDB = scoutingDBRequest.result;
                scoutingDB.createObjectStore("teams", { keyPath: "teamNumber" });
                scoutingDB.createObjectStore("robots", { keyPath: "teamNumber" });
            };
            scoutingDBRequest.onsuccess = () => {
                scoutingDB = scoutingDBRequest.result;
                dataExists().then(success => {
                    if (success) {
                        console.log("Mustangs found. No need to populate");
                    }
                    else {
                        console.log("Mustangs not found...populating now");
                        populateDB();
                    }
                    dbReady = true;
                    resolve(true);
                }).catch(reason => {
                    console.log("dataExists failed:", reason);
                    reject(`Checking for data failed: ${reason}`);
                });
            };
            scoutingDBRequest.onerror = (event) => {
                console.log("There was an error getting the Scouting database", event);
                reject("Could not open Scouting database");
            };
        });
    });
}
/**
 * Checks if Mechanical Mustangs is in the database. If it is, then it is safe
 * to assume data was loaded into the database at one point.
 * @returns resolves to true if Mechanical Mustangs is in the database
 */
function dataExists() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("dataExists transaction");
        const transaction = scoutingDB.transaction("teams", "readwrite");
        const teamsStore = transaction.objectStore("teams");
        const getMustangs = teamsStore.get(3314);
        return new Promise((resolve, reject) => {
            getMustangs.onerror = (event) => {
                reject(`Error while getting a team: ${event}`);
            };
            getMustangs.onsuccess = () => {
                var _a;
                if (((_a = getMustangs.result) === null || _a === void 0 ? void 0 : _a.teamNumber) === 3314) {
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            };
        });
    });
}
/**
 * Fills the scoutingDB with the localTeams entries
 */
function populateDB() {
    console.log("populateDB transaction");
    const transaction = scoutingDB.transaction(["teams", "robots"], "readwrite");
    const teamsStore = transaction.objectStore("teams");
    localTeams.forEach(team => {
        teamsStore.put(team);
    });
    const robotsStore = transaction.objectStore("robots");
    localRobots.forEach(robot => {
        robotsStore.put(robot);
    });
}
/**
 * This function queries the database for all teams.
 * @returns All FRC Teams in database
 */
export function getTeams() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Get Teams transaction");
        if (!dbReady) {
            yield initDB().catch(reason => {
                console.log(reason);
            });
        }
        const transaction = scoutingDB.transaction("teams", "readonly");
        const teamsStore = transaction.objectStore("teams");
        const teamsQuery = teamsStore.getAll();
        return new Promise((resolve, reject) => {
            teamsQuery.onsuccess = () => {
                if (teamsQuery.result === undefined) {
                    reject("getTeams Query was successful but result was undefined");
                }
                else {
                    resolve(teamsQuery.result);
                }
            };
            teamsQuery.onerror = (event) => {
                reject(`getTeams Query could not be completed: ${event}`);
            };
        });
    });
}
/**
 * Queries database for info on the team's robot
 * @param teamNumber
 */
export function getRobotInfo(teamNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Get Robot Info transaction");
        const transaction = scoutingDB.transaction("robots", "readonly");
        const robotStore = transaction.objectStore("robots");
        const robotQuery = robotStore.get(teamNumber);
        return new Promise((resolve, reject) => {
            robotQuery.onsuccess = () => {
                if (robotQuery.result === undefined) {
                    reject("getTeams Query was successful but result was undefined");
                }
                else {
                    resolve(robotQuery.result);
                }
            };
            robotQuery.onerror = (event) => {
                reject(`getTeams Query could not be completed: ${event}`);
            };
        });
    });
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
];
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
];
