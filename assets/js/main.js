const addbutton = document.querySelector('.bnt_add')
const input = document.querySelector(".add__")
const taskList = document.querySelector('.tasklist')

function makeTaskDraggable(taskElement) {
    taskElement.draggable = true;

    taskElement.addEventListener('dragstart', function (e) {
        e.dataTransfer.setData('text/plain', taskElement.textContent);
        taskElement.classList.add('dragging');
    });

    taskElement.addEventListener('dragend', function () {
        taskElement.classList.remove('dragging');
    });
}

addbutton.addEventListener('click', function () {
    const task = input.value;

    if (task !== '') {
        const newTask = document.createElement('li');
        const taskText = document.createElement('span');
        const checkbox = document.createElement('input');
        const meet = document.createElement('input');

        meet.type = 'time';
        checkbox.type = 'checkbox';
        meet.classList.add('input-time');
        checkbox.classList.add('task-checkbox');
        newTask.classList.add('task-item');

        newTask.textContent = task;
        newTask.appendChild(meet);
        newTask.appendChild(checkbox);
        taskList.appendChild(newTask);

        makeTaskDraggable(newTask);

        input.value = '';

        checkbox.addEventListener('click', function () {
            setTimeout(function () {
                newTask.remove();
            }, 1000);
        });
    }
});

taskList.addEventListener('dragover', function (e) {
    e.preventDefault();
    const draggingElement = document.querySelector('.dragging');
    if (draggingElement) {
        const afterElement = getDragAfterElement(taskList, e.clientY);
        const currentElement = draggingElement.parentElement;
        if (afterElement == null) {
            taskList.appendChild(draggingElement);
        } else {
            taskList.insertBefore(draggingElement, afterElement);
        }
    }
});

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.task-item:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}