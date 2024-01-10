// Function to load XML file using AJAX
function loadXMLDoc(filename) {
  xhttp = new XMLHttpRequest();

  xhttp.open("GET", filename, false);
  xhttp.send();
  return xhttp.responseXML;
}

// Function to display restaurant data
function showRestaurants() {
  const xmlDoc = loadXMLDoc("restaurant.xml");
  const restaurants = xmlDoc.getElementsByTagName("restaurant");
  const restaurantList = document.getElementById("restaurants");
  restaurantList.innerHTML = "";

  for (let i = 0; i < restaurants.length; i++) {
    const name = restaurants[i].getAttribute("name");
    const address = restaurants[i].getAttribute("address");
    const type = restaurants[i].getAttribute("type");

    const listItem = document.createElement("li");
    listItem.className = "list";
    listItem.textContent = `Name : ${name} || Address : ${address}`;

    if (type === "sitdown") {
      listItem.style.color = "blue"; // Change text color for sit down restaurants
    } else if (type === "bar") {
      listItem.style.color = "green"; // Change text color for bar restaurants
    }

    restaurantList.appendChild(listItem);
  }
}

// Call the function to display restaurant data when the page loads
const btn = document.getElementById("fetch");
btn.addEventListener("click", showRestaurants);
