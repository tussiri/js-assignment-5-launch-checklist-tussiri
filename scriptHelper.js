// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let div = document.getElementById('missionTarget');

    div.innerHTML = `
                <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
                 `;
}

function validateInput(testInput) {
    let numInput = Number(testInput);
    if (numInput === '') {
        return "Empty"
    } else if (isNaN(numInput)) {
        return "Not a Number"
    } else if (isNaN(numInput) === false) {
        return "Is a Number"
    }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let fuel = document.getElementById("fuelStatus");
    let copilotStatus = document.getElementById('copilotStatus');
    let cargoStatus = document.getElementById('cargoStatus');

    if (validateInput(pilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(copilot) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert(`All fields are required!`);
    } else if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Make sure that you have entered the valid information for each field!");
    } else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        let launchStatus = document.getElementById("launchStatus");
        if (fuelLevel < 10000 && cargoLevel <= 10000) {
            fuel.innerHTML = 'Fuel level too low for launch';
            cargoStatus.innerHTML = 'Cargo mass low enough for launch';
            launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
            launchStatus.style.color = "#c7254e";
        } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
            fuel.innerHTML = 'Fuel level high enough for launch';
            cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
            launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
            launchStatus.style.color = "#c7254e";
        } else if (fuelLevel < 10000 && cargoLevel > 10000) {
            fuel.innerHTML = 'Fuel level too low for launch';
            cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
            launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
            launchStatus.style.color = "#c7254e";
        } else {
            fuel.innerHTML = 'Fuel level high enough for launch';
            cargoStatus.innerHTML = 'Cargo mass low enough for launch';
            launchStatus.innerHTML = 'Shuttle is Ready for Launch';
            launchStatus.style.color = "#419F6A";
        }

    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        if (response.status >= 400) {
            throw new Error('Bad response');
        } else {
            return response.json();
        }

    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
