/**
 * Agrega un evento de clic al botón de WhatsApp para redirigir al usuario.
 *
 * Esta función asocia un evento de clic al botón con el ID `wp-btn`. Cuando se hace clic en el botón,
 * se registra un mensaje en la consola indicando que se está redirigiendo a WhatsApp.
 *
 * @function
 */
export function openWp() {
  const wpBtn = document.getElementById("wp-btn");

  wpBtn.addEventListener("click", () => {
    console.log("Redirigiendo a WhatsApp");
  });
}
