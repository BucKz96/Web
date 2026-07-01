const planets_list = document.getElementById('planets-list')
const planets_total = document.getElementById('planets-total')
const detail_name = document.getElementById('detail-name')
const detail_population = document.getElementById('detail-population')
const detail_diameter = document.getElementById('detail-diameter')
const detail_climate = document.getElementById('detail-climate');
const detail_gravity = document.getElementById('detail-gravity')
const detail_terrain = document.getElementById('detail-terrain')


const planets_url = "https://swapi.dev/api/planets/";

const getAllPlanets = async (planets_url) => {
    let allPlanets = [];
    let nextUrl = planets_url;
    let count = 0;
  
    while (nextUrl !== null) {
      const res = await fetch(nextUrl);
      const data = await res.json();
      allPlanets = allPlanets.concat(data.results);
      count = data.count;
      nextUrl = data.next;
    }
  
    return {
      count: count,
      results: allPlanets,
    };
  };

const getPlanetsCount = (data) => {
    planets_total.textContent = data.count;
};

const getPlanetsList = (data) => {
    planets_list.innerHTML = "";
    data.results.forEach((planet) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${planet.name}</td>
        <td>${planet.terrain}</td>
        <td>${planet.population}</td>
        `;
        row.addEventListener('click', () => getPlanetDetails(planet.name, data));
        planets_list.append(row);
    });
};

const getPlanetsData = async () => {
    const data = await getAllPlanets(planets_url);
    getPlanetsCount(data);
    getPlanetsList(data);
};

const getPlanetDetails = (planet_name, data) => {
  console.log(planet_name);
  const planet_details = data.results.find(planet => planet.name === planet_name);
  displayPlanetDetails(planet_details);
};

const displayPlanetDetails = (planet_details) => {
  detail_name.textContent = planet_details.name;
  detail_population.textContent = planet_details.population;
  detail_diameter.textContent = planet_details.diameter;
  detail_climate.textContent = planet_details.climate;
  detail_gravity.textContent = planet_details.gravity;
  detail_terrain.textContent = planet_details.terrain;
};

getPlanetsData();
