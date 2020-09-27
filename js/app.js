const tabItems = document.querySelectorAll(".side-nav__item");
const tabContents = document.querySelectorAll(".tab-content");

function selectItem() {
    removeActive();
    removeShow();
    // Add active styling to current tab
    this.classList.add("side-nav__item--active");
    // Pick content for current tab
    const tabContent = document.querySelector(`#${this.id}-content`);
    // Add show class
    tabContent.classList.add("show");
}

function removeActive() {
    tabItems.forEach(item => item.classList.remove("side-nav__item--active"));
}

function removeShow() {
    tabContents.forEach(item => item.classList.remove("show"));
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener("click", selectItem));