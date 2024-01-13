let countrValue = document.getElementById("country");

let btn = document.getElementById("btn");
btn.addEventListener("click", getPopulation);
let detail = document.querySelector(".countryDetail");
async function getPopulation() {
  let first = countrValue.value.charAt(0).toUpperCase();
  let remaistring = countrValue.value.slice(1, countrValue.value.length);
  console.log(first, remaistring);
  name = first + remaistring;

  const resp = await fetch(
    `https://d6wn6bmjj722w.population.io:443/1.0/population/1980/${name}/18/`
  );
  const jsondata = await resp.json();
  if (jsondata.detail) {
    detail.innerHTML = `<h3>Invalid Input enter proper country</h3>`;
  }
  console.log(jsondata[0].detail);

  const countryName = jsondata[0].country;
  const male = jsondata[0].males;
  const females = jsondata[0].females;
  const totalPopulation = jsondata[0].total;

  detail.innerHTML = ``;
  detail.innerHTML = `
          <ul id="listItems">
              <li>Name : ${countryName}</li>
              <li>Female Population :${females}</li>
              <li>Male Population : ${male}</li>
              <li>Total Population : ${totalPopulation}</li>
            </ul>`;
}
countrValue.value = "";
