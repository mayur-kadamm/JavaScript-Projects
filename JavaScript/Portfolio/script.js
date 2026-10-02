// here we design the functionality of resume download button

const resumeBtn = document.getElementById("resume");

resumeBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "Image/Oct-Mayur-Kadam--Resume.pdf";
  link.download = "Mayur_Kadam_Resume.pdf";
  link.click();
});