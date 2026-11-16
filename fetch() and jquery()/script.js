
// JSON Data
const students = [
    {id: 1, name: "Ram", email: "ram23@gmail.com"},
    {id: 2, name: "Priya", email: "priya31@gmail.com"},
    {id: 3, name: "Amit", email: "amit12@gmail.com"},
    {id: 4, name: "Karan", email: "karan06@gmail.com"}
];

// Convert JSON into Blob
const blob = new Blob([JSON.stringify(students)],
    {type: "application/json"});
const jsonURL = URL.createObjectURL(blob);

// Load using Fetch()
function loadFetch() {
    fetch(jsonURL)
    .then(response => response.json())
    .then(data => {
        let table = document.getElementById("studentTable");
        table.innerHTML = "";
        data.forEach(student => {
            table.innerHTML += `<tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
            </tr>`;
        });
    })
    .catch(error => console.log(error));
}

// Load using jQuery
function loadJQuery() {
    $.getJSON(jsonURL, function(data) {
        $("#studentTable").html("");
        $.each(data, function(index, student) {
            $("#studentTable").append(`<tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
            </tr>`);
        });
    }).fail(function() {
        console.log("Error loading JSON");
    });
}
