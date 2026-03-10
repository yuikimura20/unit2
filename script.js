// Get modal and close button
// Get modal and close button
const modal = document.getElementById("welcomeModal");
const closeBtn = document.querySelector(".close-button");

// Close the modal when clicking X
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Optional: close modal when clicking outside the box
window.addEventListener("click", (e) => {
  if(e.target === modal){
    modal.style.display = "none";
  }
});