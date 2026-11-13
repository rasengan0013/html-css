const count = Number(prompt("How many participants?"));
const names = [];

for (let i = 0; i < count; i++) {
  const name = prompt("Enter a name");
  names.push(name);
}

names.sort();

const list = document.querySelector("#names");

for (let i = 0; i < names.length; i++) {
  const item = document.createElement("li");
  item.textContent = names[i];
  list.appendChild(item);
}
