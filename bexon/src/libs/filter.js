const filter = () => {
  const portfolioBox = document.querySelector(".portfolio-box");

  const filterButtons = document.querySelectorAll(
    ".filter-button-group button"
  );

  // Wait for all images to load
  const images = portfolioBox?.querySelectorAll("img");

  const imagesLoaded = () => {
    return new Promise((resolve) => {
      let loadedCount = 0;
      images?.forEach((img) => {
        if (img.complete) {
          loadedCount++;
        } else {
          img.addEventListener("load", () => {
            loadedCount++;
            if (loadedCount === images?.length) resolve();
          });
          img.addEventListener("error", () => {
            loadedCount++;
            if (loadedCount === images?.length) resolve();
          });
        }
      });
      if (loadedCount === images?.length) resolve();
    });
  };

  imagesLoaded().then(() => {
    // Initialize Isotope

    import("isotope-layout").then(({ default: Isotope }) => {
      const iso = new Isotope(portfolioBox, {
        itemSelector: ".portfolio-box .portfolio-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".portfolio-box .portfolio-sizer",
          gutter: ".portfolio-box .gutter-sizer",
        },
      });

      // Filter items on button click
      filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
          // Remove active class from all buttons
          filterButtons.forEach((btn) => btn.classList.remove("active"));

          // Add active class to the clicked button
          button.classList.add("active");

          // Filter items
          const filterValue = button.getAttribute("data-filter");
          iso.arrange({ filter: filterValue });
        });
      });
    });
  });
};

export default filter;
