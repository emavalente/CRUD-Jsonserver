// Print an Alert message
export function showAlert(message) {
  const exist = document.querySelector(".bg-red-700");

  if (!exist) {
    const $alert = document.createElement("P");
    $alert.classList.add(
      "mt-6",
      "max-w-lg",
      "mx-auto",
      "p-3",
      "bg-red-100",
      "text-red-500",
      "text-center",
      "border-solid",
      "rounded",
      "border-red-500",
      "border-2"
    );

    $alert.innerHTML = `
        <strong>¡ERROR!</strong>
        <span class="block sm:inline">${message}</span>
    `;

    const $form = document.querySelector("#formulario");
    $form.appendChild($alert);

    setTimeout(() => {
      $alert.remove();
    }, 3000);
  }
}
