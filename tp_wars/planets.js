const planets_list = document.getElementById('planets-list')
const planets_total = document.getElementById('planets-total')
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
        planets_list.append(row);
    });
};

const getPlanetsData = async () => {
    const data = await getAllPlanets(planets_url);
    getPlanetsCount(data);
    getPlanetsList(data);
};

getPlanetsData();