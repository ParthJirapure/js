
// Add Task
function addTask() {
    let input = document.getElementById("task");
    let value = input.value.trim();

    if (value === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    let span = document.createElement("span");
    span.textContent = value;

    let done = document.createElement("button");
    done.textContent = "✓";
    done.onclick = () => span.classList.toggle("completed");

    let edit = document.createElement("button");
    edit.textContent = "Edit";
    edit.onclick = () => {
        let n = prompt("Edit task:", span.textContent);
        if (n && n.trim()) span.textContent = n.trim();
    };

    let del = document.createElement("button");
    del.textContent = "Delete";
    del.onclick = () => li.remove();

    let actions = document.createElement("div");
    actions.append(done, edit, del);
    li.append(span, actions);

    document.getElementById("list").appendChild(li);
    input.value = "";
}
