
const formData = { email: "", message: "" };


const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');


const savedData = localStorage.getItem("feedback-form-state");
if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";
    emailInput.value = formData.email;
    messageInput.value = formData.message;
}

form.addEventListener("input", (e) => {
    const target = e.target;

    if (target.name === "email") {
        formData.email = target.value;
    } else if (target.name === "message") {
        formData.message = target.value;
    }

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!formData.email.trim() || !formData.message.trim()) {
        alert("Fill please all fields");
        return;
    }

    console.log("Form data:", formData);

    // Очистка
    localStorage.removeItem("feedback-form-state");
    formData.email = "";
    formData.message = "";
    emailInput.value = "";
    messageInput.value = "";
});
