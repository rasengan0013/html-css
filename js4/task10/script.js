const form = document.querySelector("#name-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const first = document.querySelector("[name=first]").value;
  const last = document.querySelector("[name=last]").value;

  document.querySelector("#target").textContent = "Your name is " + first + " " + last;
});
