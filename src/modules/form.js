/**
 * Ajusta el tamaño de un iframe dentro de un contenedor de formulario según el ancho de la ventana.
 *
 * Este método selecciona un iframe dentro de un elemento con la clase `form-container` y
 * ajusta su ancho y alto basado en el ancho de la ventana.
 *
 * - Si el ancho de la ventana es de 768 píxeles o menos, el iframe se ajusta a un ancho de 300 píxeles y una altura de 690 píxeles.
 * - Si el ancho de la ventana es mayor a 768 píxeles, el iframe se ajusta a un ancho de 680 píxeles y una altura de 690 píxeles.
 *
 * @function
 */
export function adjustFormIframe() {
  const iframe = document.querySelector(".form-container iframe");
  const iframeWidth = window.innerWidth <= 768 ? 300 : 680;
  const iframeHeight = window.innerWidth <= 768 ? 690 : 690;

  iframe.width = iframeWidth;
  iframe.height = iframeHeight;
}
