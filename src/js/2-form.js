
const formData = { email: "", message: "" };


const form = document.getElementById("feedback-form");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");


const savedData = localStorage.getItem("feedback-form-state");
if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";
    emailInput.value = formData.email;
    messageInput.value = formData.message;
}

form.addEventListener("input", (e) => {
    if (e.target.name === "email") {
        formData.email = e.target.value;
    } else if (e.target.name === "message") {
        formData.message = e.target.value;
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


    localStorage.removeItem("feedback-form-state");
    formData.email = "";
    formData.message = "";
    emailInput.value = "";
    messageInput.value = "";
});
