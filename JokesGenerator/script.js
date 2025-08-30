let url = "https://official-joke-api.appspot.com/random_joke";
let textbox = document.querySelector(".txtbox");
let button = document.querySelector("button");
async function jokes() {
  let jokes = await fetch(url);
  console.log(jokes);
  let lines = await jokes.json();
  textbox.innerText = lines.setup + "\n>>" + lines.punchline;
  console.log(lines.punchline);
  console.log(lines.setup);
}

button.addEventListener("click", jokes);
