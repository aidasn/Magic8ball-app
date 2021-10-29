//   create function
const button = document.getElementById("button");
const response = document.getElementById("response");
const resetButton = document.getElementById("reset");
const responses = [
  "Yes, absolutely!",
  "No, but there is something better for you!",
  "Yes, but not yet!",
  "Do pigs fly?",
  "You're asking the wrong question!",
  "I don't know!",
  "Sometimes!",
  "Hey, I'm not a Psychic!",
  "You already know the answer!",
  "Yes, because you're awesome!",
];

const randomNum = Math.floor(Math.random() * responses.length + 1);

function getRandomResponse() {
  const randomResponse = responses[randomNum];
  document.getElementById("response").innerHTML = randomResponse;
}

function clearResponse() {
  document.getElementById("response").innerHTML = "";
}

button.addEventListener("click", getRandomResponse);
resetButton.addEventListener("click", clearResponse);
