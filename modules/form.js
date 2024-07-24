export function adjustFormIframe() {
  const iframe = document.querySelector(".form-container iframe");
  const container = document.querySelector(".form-container");
  const iframeWidth = window.innerWidth <= 768 ? 300 : 680;
  const iframeHeight = window.innerWidth <= 768 ? 690 : 690;

  iframe.width = iframeWidth;
  iframe.height = iframeHeight;
}
