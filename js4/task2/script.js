const target = document.querySelector("#target");
const first = document.createElement("li");
const second = document.createElement("li");
const third = document.createElement("li");

first.textContent = "First item";
second.textContent = "Second item";
third.textContent = "Third item";
second.classList.add("my-item");

target.appendChild(first);
target.appendChild(second);
target.appendChild(third);
