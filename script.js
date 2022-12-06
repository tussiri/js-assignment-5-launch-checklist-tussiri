// Write your JavaScript code here!
window.addEventListener("load", function () {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        
        let selectedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image)
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    });
    
    let list = document.getElementById('faultyItems');
    let form = document.querySelector('form');
    
    list.style.visibilty = "hidden";
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let pilotInput = document.querySelector("input[name=pilotName]");
        let pilot = pilotInput.value;

        let copilotInput = document.querySelector("input[name=copilotName]");
        let copilot = copilotInput.value;

        let fuelInput = document.querySelector("input[name=fuelLevel]");
        let fuelValue = (fuelInput.value);

        let cargoInput = document.querySelector("input[name=cargoMass]");
        let cargoValue = (cargoInput.value);

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    });
});
