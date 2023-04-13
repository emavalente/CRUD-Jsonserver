import { getClientSingle, setClientEdited } from "./API.js";
import { showAlert } from "./funciones.js";

(function () {
  document.addEventListener("DOMContentLoaded", async () => {
    // get URL params for get a single client
    const paramsURL = new URLSearchParams(window.location.search);
    const clientId = parseInt(paramsURL.get("id"));
    const client = await getClientSingle(clientId);

    printClientForEdit(client);

    // Form submit
    const form = document.querySelector("#formulario");
    form.addEventListener("submit", validateClient);
  });

  const inputName = document.querySelector("#nombre");
  const inputEmail = document.querySelector("#email");
  const inputPhone = document.querySelector("#telefono");
  const inputCompany = document.querySelector("#empresa");
  const inputHidden = document.querySelector("#id");

  // Print data client in every field
  function printClientForEdit(client) {
    const { name, email, phone, company, id } = client;

    inputName.value = name;
    inputEmail.value = email;
    inputPhone.value = phone;
    inputCompany.value = company;
    inputHidden.value = id;
  }

  function validateClient(e) {
    e.preventDefault();

    const client = {
      name: inputName.value,
      email: inputEmail.value,
      phone: inputPhone.value,
      company: inputCompany.value,
      id: parseInt(inputHidden.value),
    };

    if (validateInputs(client)) {
      setClientEdited(client);
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
