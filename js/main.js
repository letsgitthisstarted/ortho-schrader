/* Dr. Thomas Schrader — Orthopädie Salzburg */

(function () {
  "use strict";

  /* Sticky header: shadow + shrink on scroll */
  var header = document.getElementById("siteHeader");
  function onScroll() {
    if (window.scrollY > 24) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile navigation */
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("mainNav");
  function setMenu(open) {
    nav.classList.toggle("open", open);
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    /* Scroll-Lock auf html UND body — iOS Safari ignoriert body allein */
    document.documentElement.style.overflow = open ? "hidden" : "";
    document.body.style.overflow = open ? "hidden" : "";
  }
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setMenu(!nav.classList.contains("open"));
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false);
      });
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 960 && nav.classList.contains("open")) {
        setMenu(false);
      }
    });
  }

  /* Scroll reveal */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("visible");
    });
  }

  /* Footer year */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* Contact form → opens prefilled e-mail.
     HINWEIS: Für den Livegang an ein Formular-Backend oder das
     healthlab-Buchungssystem anbinden. */
  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var subject = "Terminanfrage über ortho-schrader.com — " + (data.get("anliegen") || "Allgemein");
      var body =
        "Name: " + (data.get("name") || "") +
        "\nTelefon: " + (data.get("telefon") || "") +
        "\nE-Mail: " + (data.get("email") || "") +
        "\nAnliegen: " + (data.get("anliegen") || "") +
        "\n\nNachricht:\n" + (data.get("nachricht") || "");
      window.location.href =
        "mailto:schrader@healthlab.at?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);
    });
  }
})();
