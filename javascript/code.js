// Event listener for the "see-more" button click
document.getElementById("see-more").addEventListener("click", function () {
    const containerOne = document.querySelector(".circle-container"); // First container of circles
    const containerTwo = document.querySelector(".circle-container-two"); // Second container of circles
    const button = document.getElementById("see-more-btn"); // Button element (currently unused)

    // Toggle visibility of the two containers
    if (containerOne.style.display === "none") {
        // Show the first container and hide the second container
        containerOne.style.display = "grid";
        containerTwo.style.display = "none";
    } else {
        // Show the second container and hide the first container
        containerOne.style.display = "none";
        containerTwo.style.display = "grid";
    }
});

// Add behavior when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("#see-more"); // Select the "see-more" button
    const nav = document.querySelector("nav"); // Select the navigation bar

    // Check if the user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (button && nav) {
        // Get the background color of the navigation bar
        const navBackgroundColor = getComputedStyle(nav).backgroundColor;

        // Save the original background color of the button
        const originalButtonColor = getComputedStyle(button).backgroundColor;

        // Add hover and focus behavior only if reduced motion is not preferred
        if (!prefersReducedMotion) {
            // Change button background color on hover
            button.addEventListener("mouseover", () => {
                button.style.backgroundColor = navBackgroundColor;
            });

            // Reset button background color when hover ends
            button.addEventListener("mouseout", () => {
                button.style.backgroundColor = originalButtonColor;
            });

            // Change button background color when focused
            button.addEventListener("focus", () => {
                button.style.backgroundColor = navBackgroundColor;
            });

            // Reset button background color when focus is lost
            button.addEventListener("blur", () => {
                button.style.backgroundColor = originalButtonColor;
            });
        } else {
            // For users who prefer reduced motion: Disable transitions
            button.style.transition = "none";
        }
    }
});

// Add bold styling to text before colons in all paragraphs within the "facts" container
const factsParagraphs = document.querySelectorAll('.facts p');

factsParagraphs.forEach(paragraph => {
    // Split the paragraph text at the colon
    const parts = paragraph.textContent.split(':');
    if (parts.length > 1) {
        // Wrap the first part (before the colon) in <strong> tags for bold styling
        paragraph.innerHTML = `<strong>${parts[0]}:</strong>${parts[1]}`;
    }
});

// Select all images in the first and second containers
const containerOneImages = document.querySelectorAll('.circle-container .circle');
const containerTwoImages = document.querySelectorAll('.circle-container-two .circle');

// Add click and keyboard event listeners to images in the first container
containerOneImages.forEach((img, index) => {
    img.addEventListener('click', () => swapImages(index)); // Swap images on click
    img.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            swapImages(index); // Swap images on Enter key press
        }
    });
});

// Add click and keyboard event listeners to images in the second container
containerTwoImages.forEach((img, index) => {
    img.addEventListener('click', () => swapImages(index)); // Swap images on click
    img.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            swapImages(index); // Swap images on Enter key press
        }
    });
});

// Function to swap images between two containers
function swapImages(index) {
    // Temporarily store the `src` and `alt` attributes of the image in the first container
    const tempSrc = containerOneImages[index].src;
    const tempAlt = containerOneImages[index].alt;

    // Swap the `src` and `alt` attributes with the corresponding image in the second container
    containerOneImages[index].src = containerTwoImages[index].src;
    containerOneImages[index].alt = containerTwoImages[index].alt;

    // Assign the stored `src` and `alt` back to the image in the second container
    containerTwoImages[index].src = tempSrc;
    containerTwoImages[index].alt = tempAlt;
}
