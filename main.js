function scroll(containerId) {
  var container = document.getElementById(containerId);
  var isMouseDown = false;
  var startX;
  var scrollLeft;
  console.log(container);
  container.addEventListener("mousedown", function (e) {
    isMouseDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });
  container.addEventListener("mouseleave", function () {
    isMouseDown = false;
  });
  container.addEventListener("mouseup", function () {
    isMouseDown = false;
  });
  container.addEventListener("mousemove", function (e) {
    if (!isMouseDown) return;
    e.preventDefault();
    var x = e.pageX - container.offsetLeft;
    var walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  });
}

scroll("popular-cont-1");
scroll("popular-cont-2");

let navLinks = document.querySelectorAll(".nav ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((link) => {
      link.classList.remove("active-link");
    });
    link.classList.add("active-link");
  });
});

let categories = document.querySelectorAll(".index + .categories .category");

categories.forEach((category) => {
  category.addEventListener("click", function () {
    categories.forEach((c) => {
      c.classList.remove("active-category");
    });

    category.classList.add("active-category");
  });
});
