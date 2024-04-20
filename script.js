// JavaScript for Trashcan and Pothole Detection web app

// Function to locate nearby trashcans
function locateNearbyTrashcans() {
  // Implement logic to locate nearby trashcans and update map markers
  alert("Locating nearby trashcans...");
}

// Function to take a picture
function takePicture() {
  const fileInput = document.getElementById('fileInput');
  const preview = document.getElementById('preview');

  fileInput.click();

  fileInput.onchange = () => {
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      preview.src = reader.result;
      preview.style.display = 'block';
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
}
