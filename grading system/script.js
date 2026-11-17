
// Student Details
let name;
do {
    name = prompt("Enter Student Name:");
} while (!name || !name.trim());

let prn = prompt("Enter 11 Digit PRN:");
while (!/^\d{11}$/.test(prn || "")) {
    prn = prompt("Invalid PRN! Enter 11 digits:");
}

let n = prompt("Enter Number of Subjects:");
while (!/^[1-9]\d*$/.test(n || "")) {
    n = prompt("Enter valid subject count:");
}
n = Number(n);

let total = 0, subjects = "";

// Subject Details
for (let i = 1; i <= n; i++) {
    let sub = prompt("Enter Subject " + i + " Name:");
    while (!sub || !sub.trim())
        sub = prompt("Subject name is compulsory. Enter again:");

    let marks = prompt("Enter Marks for " + sub + ":");
    while (!/^\d+$/.test(marks || "") ||
           Number(marks) > 100) {
        marks = prompt("Enter valid marks (0-100):");
    }

    total += Number(marks);
    subjects += `<p>${sub}: ${marks}</p>`;
}

// Percentage and Grade
let p = total / n;
let grade = p >= 90 ? "A+" : p >= 80 ? "A" :
            p >= 70 ? "B" : p >= 60 ? "C" :
            p >= 50 ? "D" : "F";

// Display Result
document.getElementById("result").innerHTML = `
<h3>Student Result</h3>
<p>Name: ${name}</p>
<p>PRN: ${prn}</p>
<h4>Subjects</h4>
${subjects}<hr>
<p>Total Marks: ${total}</p>
<p>Percentage: ${p.toFixed(2)}%</p>
<h3>Grade: ${grade}</h3>`;
