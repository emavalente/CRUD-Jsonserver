// IIFE protection ()()
import { showAlert } from "./funciones.js";
import { newClient } from "./API.js";

(function () {
  const $form = document.querySelector("#formulario");
  $form.addEventListener("submit", validateClient);

  // Validate fields values
  function validateClient(e) {
    e.preventDefault();

    const name = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#telefono").value;
    const company = document.querySelector("#empresa").value;

    const client = {
      name,
      email,
      phone,
      company,
    };

    if (validateInputs(client)) {
      newClient(client);
    } else {
      showAlert("Todos los campos son obligatorios");
      return;
    }
  }

  // Checking empty fields
  function validateInputs(client) {
    return Object.values(client).every((value) => value !== "");
  }
})();
