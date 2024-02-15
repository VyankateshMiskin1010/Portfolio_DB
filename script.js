function handleScroll() {
  var sections = document.querySelectorAll("#content > div");
  var scrollPosition = window.scrollY;

  sections.forEach(function (section) {
    var sectionTop = section.offsetTop - 50;
    var sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      document
        .querySelector("#nav-options a.active")
        .classList.remove("active");
      document
        .querySelector('#nav-options a[href="#' + section.id + '"]')
        .classList.add("active");
    }
  });
}
document.addEventListener("scroll", handleScroll);
