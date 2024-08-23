// Select all section elements on the page and store them in the sections variable
const sections = document.querySelectorAll("section");

// Variable to store the previous vertical scroll position
let oldScrollY = 0;

// Variable to track the currently active section's index
let activeSectionIndex = 0;

// Boolean variable to manage the timing of section movement
let time = true;

// Boolean variable to check if it's the first scroll interaction
let start = true;

// Function to handle the movement between sections based on the scroll direction
function moveSections() {
  // Check if the time is false, which means we're in the middle of a 500ms cooldown period
  if (!time) {
    // Exit the function early if we are in the cooldown period to prevent rapid section changes
    return;
  }

  // Calculate the total height of the viewport, which is the height of the screen
  const screenHeight = window.innerHeight;

  // Calculate the total height of all sections combined
  const tHeight = screenHeight * sections.length;

  // Get the current vertical scroll position of the window
  const scrollY = window.scrollY;

  // Remove the 'active' class from all sections to reset their state
  sections.forEach((section) => {
    // Remove the 'active' class from each section
    section.classList.remove("active");
  });

  // Check if the user has scrolled down by comparing the current scroll position with the previous one
  if (oldScrollY < scrollY) {
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
  }, 500);
}

// Attach the moveSections function to the scroll event on the window object
window.addEventListener("scroll", moveSections);
window.addEventListener("resize", moveSections);

// Ensure the page always scrolls to the top after a reload, so the user starts at the top section
setTimeout(() => {
  // Scroll the window to the top of the page with an instant scroll effect
  window.scrollTo({
    // Set the top position to twice the screen height for a predefined scroll position
    top: window.innerHeight * 2,

    // Set the scrolling behavior to instant to immediately scroll to the target position
    behavior: "instant",
  });
}, 10);
