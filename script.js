document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // Only handle internal page anchors
    if (href.startsWith("#")) {
      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();

        window.scrollTo({
          top: target.offsetTop - 30,
          behavior: "smooth",
        });
      }
    }
  });
});
