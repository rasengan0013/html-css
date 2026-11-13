const dogs = [];

for (let i = 0; i < 6; i++) {
  const name = prompt("Enter a dog name");
  dogs.push(name);
}

dogs.sort();
dogs.reverse();

const list = document.querySelector("#dogs");

for (let i = 0; i < dogs.length; i++) {
  const item = document.createElement("li");
  item.textContent = dogs[i];
  list.appendChild(item);
}
