function activateNavigation() {
  // Creating the navigation dots
  const sections = document.querySelectorAll(".section");
  const navContainer = document.createElement("nav");
  console.log(sections);
  const navItems = Array.from(sections).map((section) => {
    return `
        <div class="nav-item" data-for-section=${section.id}>
        <a href="#${section.id}" class="nav-link"></a>
        <span class="nav-label">${section.dataset.label}</span>
      </div>        
      `;
  });
  navContainer.classList.add("nav");
  navContainer.innerHTML = navItems.join("");

  const oberserver = new IntersectionObserver(
    (entries) => {
      document.querySelectorAll(".nav-link").forEach((navLink) => {
        navLink.classList.remove("nav-link-selected");
      });

      const visibleSection = entries.filter((entry) => entry.isIntersecting)[0];
      console.log(visibleSection.target.id);
      document
        .querySelector(
          `.nav-item[data-for-section="${visibleSection.target.id}"] .nav-link`
        )
        .classList.add("nav-link-selected");
    },
    { threshold: 0.5 }
  );

  // For smooth navigation
  sections.forEach((section) => oberserver.observe(section));
  document.body.appendChild(navContainer);
  document.querySelectorAll("a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      console.log(targetId);
      // Smooth scrolling behavior
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

activateNavigation();

function freebee() {
  window.location.href = "https://github.com/allynee/FreeBee";
}
