document.getElementById("see-more").addEventListener("click", function () {
    const containerOne = document.querySelector(".circle-container");
    const containerTwo = document.querySelector(".circle-container-two");
    const button = document.getElementById("see-more-btn");

    if (containerOne.style.display === "none") {
        // Show container one and hide container two
        containerOne.style.display = "grid";
        containerTwo.style.display = "none";
    } else {
        // Show container two and hide container one
        containerOne.style.display = "none";
        containerTwo.style.display = "grid";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("#see-more"); // Select the button
    const nav = document.querySelector("nav"); // Select the nav element

    if (button && nav) {
        // Get the computed background color of the nav
        const navBackgroundColor = getComputedStyle(nav).backgroundColor;

        // Save the button's original background color
        const originalButtonColor = getComputedStyle(button).backgroundColor;

        // Update button background on hover
        button.addEventListener("mouseover", () => {
            button.style.backgroundColor = navBackgroundColor;
        });

        button.addEventListener("mouseout", () => {
            button.style.backgroundColor = originalButtonColor; // Reset to original color
        });

        // Update button background on focus
        button.addEventListener("focus", () => {
            button.style.backgroundColor = navBackgroundColor;
        });

        button.addEventListener("blur", () => {
            button.style.backgroundColor = originalButtonColor; // Reset to original color
        });
    }
});

const factsParagraphs = document.querySelectorAll('.facts p');

factsParagraphs.forEach(paragraph => {
    // Split the text at the colon (:)
    const parts = paragraph.textContent.split(':');
    if (parts.length > 1) {
        // Wrap the first part (before the colon) in <strong> tags
        paragraph.innerHTML = `<strong>${parts[0]}:</strong>${parts[1]}`;
    }
});
