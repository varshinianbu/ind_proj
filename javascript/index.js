document.addEventListener('DOMContentLoaded', () => {
    // Select all images within the clickable sections
    const clickableImages = document.querySelectorAll('.click-img');

    // Select the thought bubble container
    const thoughtBubble = document.querySelector('.cloud-container');

    // Function to handle image overlay logic
    const handleOverlay = (image) => {
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
    };

    // Add click and keyboard event listeners to each image
    clickableImages.forEach(image => {
        // Handle click events
        image.addEventListener('click', () => handleOverlay(image));

        // Handle keyboard events (Enter and Space)
        image.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault(); // Prevent default scroll behavior for Space
                handleOverlay(image);
            }
        });

        // Make images focusable for keyboard users
        image.setAttribute('tabindex', '0'); // Add tabindex to make images focusable
    });
});
