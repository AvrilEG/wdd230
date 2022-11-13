const requestURL = './json/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL) 
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    const members = jsonObject["members"];
    members.forEach(displayMembers);
  });

function displayMembers(member) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let name = document.createElement('h2');
  

  
  document.querySelector('div.cards').appendChild(card);
}

/*buttons*/
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards-grid");

listbutton.addEventListener("click", () => {
    display.classList.add("cards-list");
    display.classList.remove("cards-grid");
});

gridbutton.addEventListener("click", () => {
    display.classList.add("cards-grid");
    display.classList.remove("cards-list");
})
