document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = this;
  const successMsg = document.getElementById("successMsg");

  form.style.display = "none";
  successMsg.classList.remove("d-none");

  setTimeout(() => {
    form.reset();
    form.style.display = "";
    successMsg.classList.add("d-none");
  }, 3000);
});