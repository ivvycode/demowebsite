/*
 * ACME Venue — demo website behaviour.
 * Classic script (not an ES module) so it runs from file:// as well as over HTTP.
 */
(function () {
  "use strict";

  // Mobile navigation toggle.
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Current year in the footer.
  var year = document.querySelectorAll("[data-year]");
  for (var i = 0; i < year.length; i++) {
    year[i].textContent = new Date().getFullYear();
  }

  // Enquiry form: this is a static site with no backend, so the form never
  // leaves the browser. Swap this out when a real product feature is embedded.
  var form = document.querySelector("[data-demo-form]");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var success = document.createElement("div");
      success.className = "form-success";
      success.setAttribute("role", "status");
      success.textContent = "Thanks! Your enquiry has been received. (Demo only — nothing was sent.)";
      form.replaceWith(success);
    });
  }
})();
