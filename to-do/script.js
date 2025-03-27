function showMessage(text, color = "bg-success") {
    let messageDiv = document.getElementById("message");
    messageDiv.textContent = text;
    messageDiv.className = `alert ${color} text-white text-center`;
    messageDiv.style.display = "block";

    setTimeout(() => {
        messageDiv.style.display = "none";
    }, 3000);
}

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let li = document.createElement("li");
    li.className = "list-group-item";

    let span = document.createElement("span");
    span.textContent = taskText;
    span.onclick = () => span.classList.toggle("completed");

    let btn = document.createElement("button");
    btn.className = "btn btn-danger btn-sm";
    btn.textContent = "❌";
    btn.onclick = () => {
        showMessage(`Se borró: ${taskText}`, "bg-danger");
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(btn);
    document.getElementById("taskList").appendChild(li);

    showMessage(`Se agregó: ${taskText}`, "bg-success");
    taskInput.value = "";
}
