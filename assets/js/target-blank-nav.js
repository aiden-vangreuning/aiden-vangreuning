document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelectorAll(
      '.masthead a[href$=".pdf"], .masthead a[href^="http"]'
    )
    .forEach(link => {
      // Ignore same-site absolute links
      if (link.hostname && link.hostname !== window.location.hostname) {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      }

      // Always open PDFs in new tab
      if (link.href.endsWith(".pdf")) {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      }
    });
});
