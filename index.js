document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");
    const taskslist = document.getElementById("tasks");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const theDescription = document.getElementById("new-task-description");
        const taskDescriptionInput = theDescription.value;

        const newActivity = document.createElement("li");
        newActivity.textContent = taskDescriptionInput;
    })
})
