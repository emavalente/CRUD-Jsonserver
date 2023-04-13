import { showAlert } from "./funciones.js";

const url = "http://localhost:4000/clientes";

//todo Function to create a new register.
export const newClient = async (client) => {
  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(client),
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.href = "index.html";
  } catch (error) {
    showAlert("Error: No se pudo crear el registro");
  }
};

//todo Function to get a client list.
export const getClientList = async () => {
  const url = "http://localhost:4000/clientes";
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error de servidor: 404!");
    }

    const clients = await response.json();
    return clients;
  } catch (error) {
    showAlert("Error: No se pudieron obtener los registros");
  }
};

//todo Function to delete a register.
export const deleteClient = async (id) => {
  try {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    showAlert("Error: No se pudo eliminar el registro");
  }
};

//todo Function to get a single register.
export const getClientSingle = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    showAlert("Error: No se pudo obtener el registro");
  }
};

//todo Function to set an edited register.
export const setClientEdited = async (register) => {
  try {
    await fetch(`${url}/${register.id}`, {
      method: "PUT",
      body: JSON.stringify(register),
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.href = "index.html";
  } catch (error) {
    showAlert("Error: No se pudo actualizar el registro");
  }
};
