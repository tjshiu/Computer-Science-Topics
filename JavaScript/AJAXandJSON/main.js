let pageCounter = 1;
let btn  = document.getElementById("btn");
let animalContainer = document.getElementById("animal-info");
btn.addEventListener("click", () => {
  let ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', `https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`);
  // tell the browser to go and get the data.
  ourRequest.onload = function () {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      let ourData = JSON.parse(ourRequest.responseText); //our response text
      renderHTML(ourData);
    } else {
      console.log("We connected to the server, but returned an error.");
    }
  };

  ourRequest.onerror = function() {
    alert("Connection Error");
  };

  ourRequest.send();
  pageCounter++;
  if (pageCounter > 3) {
    btn.classList.add("hide-me");
  }
});

function renderHTML(data) {
  let htmlString = "";

  for (let i = 0; i < data.length; i++) {
    htmlString += `<p> ${data[i].name} is a ${data[i].species} that likes to eat `;

    for (let j = 0; j < data[i].foods.likes.length; j++) {
      if (j === 0) {
        htmlString += data[i].foods.likes[j];
      } else {
        htmlString += " and " + data[i].foods.likes[j];
      }
    }

    htmlString += " and dislikes ";

    for (let j = 0; j < data[i].foods.dislikes.length; j++) {
      if (j === 0) {
        htmlString += data[i].foods.dislikes[j];
      } else {
        htmlString += " and " + data[i].foods.dislikes[j];
      }
    }

    htmlString += ". </p>";
  }
  animalContainer.insertAdjacentHTML("beforeend", htmlString);
}
