"use strict";
const form = document.querySelector(".login-form");
const button = document.querySelector(".btn");

form.addEventListener("submit", (event) => {
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  event.preventDefault();
  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    const userData = {
      email,
      password,
    };
    console.log(userData);
    form.reset();
  }
});
