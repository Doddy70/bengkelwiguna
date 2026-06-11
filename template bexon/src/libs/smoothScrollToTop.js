const smoothScrollToTop = () => {
  var links = document.querySelectorAll('a[href^="#"]');
  if (!links.length) {
    return;
  }
  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      var targetId = this.getAttribute("href").substring(1);

      var targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
      }
    });
  });
};

export default smoothScrollToTop;
