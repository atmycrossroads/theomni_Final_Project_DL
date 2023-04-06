// With no actual back end server and database I made placeholder functions for submissions. I hope to build onto this starting code if I pass this class and get to move onto the next.


// Login form submission handler
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  //username and password validation (replace with actual server-side validation code)
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (validateCredentials(username, password)) {
    window.location.href = "charc.html";
  } else {
    window.location.href = "signup.html";
  }
});

//place holder for actual server-side validation
function validateCredentials(username, password) {
  // request to server to validate credentials.
  return username === "validUsername" && password === "validPassword";
}

document.getElementById("create-account").addEventListener("click", function() {
  window.location.href = "acctcreation.html";
});


// sign up form submission handler
document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault();
  // Save user data to the server (replace with actual server-side saving)
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const yearsXp = document.getElementById("years-xp").value;
  const knownSystems = document.getElementById("known-systems").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  saveUserDataToServer(name, age, yearsXp, knownSystems, username, password);
});

//placeholder function for server-side saving
function saveUserDataToServer(name, age, yearsXp, knownSystems, username, password) {
  //placeholder for server request to save data.
  console.log("User data saved:", { name, age, yearsXp, knownSystems, username, password });
}


// Character form submission handler
document.getElementById("character-form").addEventListener("submit", function(event) {
  event.preventDefault();
  // placeholder to save character data to the server
  const characterName = document.getElementById("character-name").value;
  const characterClass = document.getElementById("class").value;
  const description = document.getElementById("description").value;

  saveCharacterDataToServer(characterName, characterClass, description);
});

//placeholder function for server-side saving
function saveCharacterDataToServer(characterName, characterClass, description) {
  //placeholder for server request to save data.
  console.log("Character data saved:", { characterName, characterClass, description });
}

//World form submission handler
document.getElementById("game-form").addEventListener("submit", function(event) {
  event.preventDefault();
  // placeholder to save character data to the server
  const gameName = document.getElementById("game-name").value;
  const genre = document.getElementById("genre").value;
  const system = document.getElementById("system").value
  const worldDescription = document.getElementById("world-description").value;

  saveCharacterDataToServer(gameName, genre, system, worldDescription);
});

//placeholder function for server-side saving
function saveWorldDataToServer(gameName, genre, system, worldDescription) {
  //placeholder for server request to save data.
  console.log("World data saved:", { gameName, genre, system, worldDescription });
}

