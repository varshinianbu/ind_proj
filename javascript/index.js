document.addEventListener('DOMContentLoaded', () => {
    // Select all images within the clickable sections
    const clickableImages = document.querySelectorAll('.click-img');

    // Select the thought bubble container
    const thoughtBubble = document.querySelector('.cloud-container');

    // Add click event listeners to each image
    clickableImages.forEach(image => {
        image.addEventListener('click', () => {
            // Check if an overlay image already exists
            const existingOverlay = thoughtBubble.querySelector('.overlay-image');
            if (existingOverlay) {
                // If clicked from the same image, remove it
                if (existingOverlay.src === image.src) {
                    existingOverlay.remove();
                    return;
                }
                // Otherwise, remove the existing overlay and add the new one
                existingOverlay.remove();
            }

            // Create a new image element
            const overlayImage = document.createElement('img');
            overlayImage.src = image.src; // Set the source of the clicked image
            overlayImage.alt = image.alt; // Set the alt attribute for accessibility
            overlayImage.classList.add('overlay-image'); // Add a class for styling

            // Add a click event to remove itself when clicked
            overlayImage.addEventListener('click', () => {
                overlayImage.remove();
            });

            // Append the new image to the thought bubble container
            thoughtBubble.appendChild(overlayImage);
        });
    });
});