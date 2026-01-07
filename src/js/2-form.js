
const formData = { email: "", message: "" };

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');


const savedData = localStorage.getItem("feedback-form-state");
if (savedData) {
  const parsed = JSON.parse(savedData);
  formData.email = parsed.email || "";
  formData.message = parsed.message || "";
  emailInput.value = formData.email;
  messageInput.value = formData.message;
}

form.addEventListener("input", e => {
  if (e.target.name === "email") formData.email = e.target.value;
  if (e.target.name === "message") formData.message = e.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

form.addEventListener("submit", e => {
  e.preventDefault();
  if (!formData.email.trim() || !formData.message.trim()) {
    alert("Fill please all fields");
    return;
  }
  console.log("Form data:", formData);
  localStorage.removeItem("feedback-form-state");
  formData.email = "";
  formData.message = "";
  emailInput.value = "";
  messageInput.value = "";
});
