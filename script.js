document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    window.scrollTo({
      top: target.offsetTop - 30,
      behavior: "smooth",
    });
  });
});
