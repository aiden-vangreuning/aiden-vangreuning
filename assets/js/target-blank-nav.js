document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelectorAll('.masthead__menu-item a[href$=".pdf"]')
    .forEach(link => {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    });
});
