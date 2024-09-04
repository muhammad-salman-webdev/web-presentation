// Select all section elements on the page and store them in the sections variable
const sections = document.querySelectorAll("section");

// Variable to store the previous vertical scroll position
let oldScrollY = window.innerHeight * 80;

// Variable to track the currently active section's index
let activeSectionIndex = 0;

// Boolean variable to manage the timing of section movement
let time = true;

// Boolean variable to check if it's the first scroll interaction
let start = true;

// Function to handle the movement between sections based on the scroll direction
function moveSections() {
  // Check if the time is false, which means we're in the middle of a 500ms cooldown period

  // Get the current vertical scroll position of the window
  const scrollY = window.scrollY;

  // $$$$$$
  // $$$$$$
  if (!time) {
    oldScrollY = scrollY;
    // Exit the function early if we are in the cooldown period to prevent rapid section changes
    return;
  }

  // Calculate the total height of the viewport, which is the height of the screen
  const screenHeight = window.innerHeight;

  // Calculate the total height of all sections combined
  const tHeight = screenHeight * sections.length;

  // Remove the 'active' class from all sections to reset their state
  sections.forEach((section) => {
    // Remove the 'active' class from each section
    section.classList.remove("active");
  });

  // Check if the user has scrolled down by comparing the current scroll position with the previous one
  if (scrollY >= oldScrollY) {
    // Increment the activeSectionIndex to move to the next section
    activeSectionIndex++;
    // Check if the activeSectionIndex exceeds the number of sections available
    // If it does, reset it to the last section (index 7)
    activeSectionIndex > 7 ? (activeSectionIndex = 7) : "";
  }
  // Otherwise, check if the user has scrolled up
  else {
    // Decrement the activeSectionIndex to move to the previous section
    activeSectionIndex--;

    // Check if the activeSectionIndex goes below 0, which is not allowed
    // If it does, reset it to the first section (index 0)
    activeSectionIndex < 0 ? (activeSectionIndex = 0) : "";
  }

  // If this is the first scroll interaction, ensure the active section is the first one
  if (start) {
    // Set start to false so that this block only runs once
    start = false;

    // Reset the activeSectionIndex to 0
    activeSectionIndex = 0;
  }

  // Select the section that should now be active based on the activeSectionIndex
  const section = sections[activeSectionIndex];

  // Add the 'active' class to the newly selected section to highlight it
  section.classList.add("active");

  // Update oldScrollY to the current scroll position for the next scroll event comparison
  oldScrollY = scrollY;

  // Set time to false to initiate a cooldown period
  time = false;

  // Set a timeout to reset time to true after 500ms, allowing the next scroll event to be processed
  setTimeout(() => {
    // After 500ms, allow the next scroll event to be handled
    time = true;
  }, 1500);
}

// Attach the moveSections function to the scroll event on the window object
window.addEventListener("scroll", moveSections);

// Ensure the page always scrolls to the top after a reload, so the user starts at the top section
setTimeout(() => {
  // Scroll the window to the top of the page with an instant scroll effect
  window.scrollTo({
    // Set the top position to twice the screen height for a predefined scroll position
    top: oldScrollY,

    // Set the scrolling behavior to instant to immediately scroll to the target position
    behavior: "instant",
  });
  // Prevent the browser from restoring the last scroll position on refresh
  history.scrollRestoration = "manual";
}, 1);

// Business Section
const bsnBtns = document.querySelectorAll(
  ".business_section .change-tab-btns > .tab-btn"
);
const bsnTabs = document.querySelectorAll(
  ".business_section .business-cards-container > .business-card"
);
const bsnVideos = document.querySelectorAll(
  ".business_section .bg_video > video"
);

bsnBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    // Managing Btns
    bsnBtns.forEach((b) => b.classList.remove("active"));
    bsnBtns[i].classList.add("active");
    // Managing Tabs
    bsnTabs.forEach((t) => t.classList.remove("active"));
    bsnTabs[i].classList.add("active");
    // Managing Videos
    bsnVideos.forEach((v) => v.classList.remove("active"));
    bsnVideos[i].classList.add("active");
  });
});

// Prducts Section

const productsBtns = document.querySelectorAll(
  ".products_section .change-tab-buttons > div.btn"
);
const productsTabs = document.querySelectorAll(
  ".products_section .products-tabs-container > div.product-tab"
);

productsBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    // Managing Btns
    productsBtns.forEach((b) => b.classList.remove("active"));
    productsBtns[i].classList.add("active");
    // Managing Tabs
    productsTabs.forEach((t) => t.classList.remove("active"));
    productsTabs[i].classList.add("active");
    // Closing the popups if opened
    productsTabs.forEach((tab) =>
      tab.querySelector(".popup").classList.remove("active")
    );
  });
});

productsTabs.forEach((tab, i) => {
  const showIcon = tab.querySelector(".slides-box > i");
  const popup = tab.querySelector(".popup");
  const hideIcon = popup.querySelector(".close-btn");

  showIcon.addEventListener("click", () => {
    popup.classList.toggle("active");
  });

  hideIcon.addEventListener("click", () => {
    popup.classList.toggle("active");
  });
});

// GenAi Section
const tabBtns = document.querySelectorAll(
  ".genAI_section .btn-tabs-container > .btn-tab"
);

const tabImgs = document.querySelectorAll(
  ".genAI_section .genAi-container .images img"
);

tabBtns.forEach((tab, i) => {
  tab.querySelector(".btn").addEventListener("click", () => {
    // ---
    tabBtns.forEach((t) => t.classList.remove("active"));
    tabImgs.forEach((img) => img.classList.remove("active"));
    // ---
    tabBtns[i].classList.add("active");
    tabImgs[i].classList.add("active");
  });
});
