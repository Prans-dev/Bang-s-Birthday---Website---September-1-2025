function goToScreen(num) {
  // Hide all screens
  document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
  // Show chosen screen
  document.getElementById("screen" + num).classList.remove("hidden");
}
