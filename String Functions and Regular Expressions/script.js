
// Email Validation
function validateEmail() {
    let email = document.getElementById("email").value;
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    document.getElementById("emailResult").innerText =
        pattern.test(email) ? "Valid Email" : "Invalid Email";
}

// Extract Emails
function extractEmails() {
    let text = document.getElementById("text").value;
    let emails = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);
    document.getElementById("extractResult").innerText =
        emails ? emails.join("\n") : "No Emails Found";
}

// Extract Phone Numbers
function extractPhones() {
    let text = document.getElementById("text").value;
    let phones = text.match(/(?:\+91[-\s]?)?[6-9]\d{9}/g);
    document.getElementById("extractResult").innerText =
        phones ? phones.join("\n") : "No Phone Numbers Found";
}

// Text Analysis
function analyzeText() {
    let text = document.getElementById("analysisText").value;
    if (!text.trim()) {
        document.getElementById("analysisResult").innerText = "Enter some text";
        return;
    }
    let words = text.trim().split(/\s+/);
    let sentences = text.split(/[.!?]+/).filter(s => s.trim());
    document.getElementById("analysisResult").innerText =
        "Characters: " + text.length +
        "\nWords: " + words.length +
        "\nSentences: " + sentences.length +
        "\nUppercase: " + text.toUpperCase() +
        "\nLowercase: " + text.toLowerCase();
}
