const people_count = document.getElementById("people-count");
const vehicles_count = document.getElementById("vehicles-count");
const planets_count = document.getElementById("planets-count");
const people_url = "https://swapi.dev/api/people/";
const vehicles_url = "https://swapi.dev/api/vehicles/";
const planets_url = "https://swapi.dev/api/planets/";

const getPeople = async (people_url) => {
    const res = await fetch(people_url);
    const people = await res.json();
    return people;
};

const getPeopleCount = async () => {
    const people = await getPeople(people_url);
    people_count.textContent = people.count;
};

const getVehicles = async (vehicles_url) => {
    const res = await fetch(vehicles_url);
    const vehicles = await res.json();
    return vehicles;
};

const getVehiclesCount = async () => {
    const vehicles = await getVehicles(vehicles_url);
    vehicles_count.textContent = vehicles.count;
};

const getPlanets = async (planets_url) => {
    const res = await fetch(planets_url);
    const planets = await res.json();
    return planets;
};

const getPlanetsCount = async () => {
    const planets = await getPlanets(planets_url);
    planets_count.textContent = planets.count;
};

getPeopleCount();
getVehiclesCount();
getPlanetsCount();