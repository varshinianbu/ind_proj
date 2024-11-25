// Initialize the image index to 1 (starting image)
var slideIndex = 1;

// Show the first image by default
showDivs(slideIndex);

// Function to increment or decrement the image index and show the updated image
function plusDivs(n) {
  showDivs(slideIndex += n); // Update the image index and call the showDivs function
}

// Function to display the appropriate image based on the image index
function showDivs(n) {
  var i; // Variable for loop iteration
  var x = document.getElementsByClassName("mySlides"); // Get all elements with the class "mySlides"

  // If the image index exceeds the number of images, reset to the first image
  if (n > x.length) { 
    slideIndex = 1; 
  }

  // If the image index is less than 1, set it to the last image
  if (n < 1) { 
    slideIndex = x.length; 
  }

  // Loop through all images and hide them
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }

  // Display the current image 
  x[slideIndex - 1].style.display = "block"; 
}