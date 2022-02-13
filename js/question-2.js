const key = "a6693ad34edd421fa5d32be99ab423d1";
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=";

const resultsPrint = document.querySelector(".results");
const loader = document.querySelector(".loader");

async function getApi(key) {
  const response = await fetch(url + key);
  const data = await response.json();
  const facts = data.results;
  resultsPrint.innerHTML = "";
  for (let i = 0; i < 8; i++) {
    console.log(facts[i].name);
    resultsPrint.innerHTML += `<div class="styler"> 
    Name: ${facts[i].name}<br>
    Rating: ${facts[i].rating}<br>
    Tags: ${facts[i].tags.length}</div>`;
  }
}
getApi(key);
