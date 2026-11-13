function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

const list = document.querySelector("#rolls");
let roll = 0;

while (roll !== 6) {
  roll = rollDice();
  const item = document.createElement("li");
  item.textContent = roll;
  list.appendChild(item);
}
