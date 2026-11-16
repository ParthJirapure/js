
// Get Form Elements
const form = document.getElementById("gymForm");
const name = document.getElementById("fullName");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const age = document.getElementById("age");
const plan = document.getElementById("plan");

// Validation Function
function check(input, condition, errorId, message) {
    let error = document.getElementById(errorId);
    if (!condition) {
        error.innerText = message;
        input.className = "invalid";
        return false;
    }
    error.innerText = "";
    input.className = "valid";
    return true;
}

// Name Validation
name.addEventListener("input", () => {
    check(name, name.value.trim().length >= 3,
    "nameError", "Enter at least 3 characters.");
});

// Email Validation
email.addEventListener("input", () => {
    check(email, /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email.value.trim()),
    "emailError", "Enter valid email.");
});

// Mobile Validation
mobile.addEventListener("input", () => {
    check(mobile, /^[0-9]{10}$/.test(mobile.value),
    "mobileError", "Enter 10 digit number.");
});

// Age Validation
age.addEventListener("input", () => {
    check(age, age.value >= 16 && age.value <= 80,
    "ageError", "Age must be 16 to 80.");
});

// Plan Validation
plan.addEventListener("change", () => {
    check(plan, plan.value !== "",
    "planError", "Select a membership plan.");
});

// Submit Form
form.addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;
    valid &= check(name, name.value.trim().length >= 3,
    "nameError", "Enter at least 3 characters.");
    valid &= check(email, /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email.value.trim()),
    "emailError", "Enter valid email.");
    valid &= check(mobile, /^[0-9]{10}$/.test(mobile.value),
    "mobileError", "Enter 10 digit number.");
    valid &= check(age, age.value !== "" && age.value >= 16 && age.value <= 80,
    "ageError", "Age must be 16 to 80.");
    valid &= check(plan, plan.value !== "",
    "planError", "Select a plan.");

    document.getElementById("success").innerText =
    valid ? "Admission Submitted Successfully!" :
    "Please correct the errors.";
});
