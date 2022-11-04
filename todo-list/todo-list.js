const todoList = document.querySelector('.todo-list');
const newTaskName = document.querySelector('.task-title');
const newTaskStatus = document.querySelector('.status-btn');
const newTaskSaveBtn = document.querySelector('.save-btn');

let tasksArray = [];
let taskName = '';
let taskStatus = '';





// console.log(tasksArray);

newTaskSaveBtn.addEventListener('click', markupAddTask);


function getValues() { 
 
    taskName = newTaskName.value.trim();
    taskStatus = newTaskStatus.value;

    console.log(taskName);
    console.log(taskStatus);

}






function markupList(tasks) { 
    todoList.insertAdjacentHTML('beforeend', tasks.map((task) => {
        if (task.completed == true) {
            return `<li class="todo-list__task">
                    <label class="label">
                        <input type="checkbox" name="if-complete" checked/>
                    </label>
                    ${task.title}
                </li>`
        } else { 
            return `<li class="todo-list__task">
                        <label class="label">
                            <input type="checkbox" name="if-complete" />
                        </label>
                        ${task.title}
                    </li>`
        }
        }).join(""))
}

function markupAddTask() { 
    taskName = newTaskName.value.trim();
    taskStatus = newTaskStatus.value;
    
    if (taskStatus == 'completed') {
          todoList.insertAdjacentHTML('afterbegin', `<li class="todo-list__task">
                    <label class="label">
                        <input type="checkbox" name="if-complete" checked/>
                    </label>
                    ${taskName}
                </li>`) 
        } else if (taskStatus == 'uncompleted') { 
            todoList.insertAdjacentHTML('afterbegin', `<li class="todo-list__task">
                    <label class="label">
                        <input type="checkbox" name="if-complete"/>
                    </label>
                    ${taskName}
                </li>`)
        }

}

function makeArray(resp) { 
    for (let i = 0; i < resp.length; i += 1) { 
        tasksArray.push(resp[i]);
    }
    return tasksArray;
}



fetch("https://jsonplaceholder.typicode.com/todos/?_limit=7")
    .then(response => response.json())
    .then(json => makeArray(json))
    .then(array => markupList(array))



  
// todoList.insertAdjacentHTML('beforeend', markupList());
