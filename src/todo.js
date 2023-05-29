
//factory-function that creates objects.
function CreateTodo(title, description, date, priority, project) {
    return { title, description, date, priority, project };
}

//Controls the opening and closing feature of Todo-form.
function formController() {
    const showTodoForm = () => {
        const todoInput = document.querySelector('.todo-form');
        todoInput.classList.remove('displayNone');
    }
    const hideTodoForm = () => {
        const todoInput = document.querySelector('.todo-form');
        todoInput.classList.add('displayNone');
    }
    return { showTodoForm, hideTodoForm }
}

const todoList = []; //array which holds list of objects/todo-items.

//Access value from todo-form and adds items into the array.
function addTodoItems() {
    const titleValue = document.querySelector('#title').value;
    const descriptionValue = document.querySelector('#description-box').value;
    const dateValue = document.querySelector('#date').value;
    const selectedPriority = document.querySelector('#priority').value;
    const selectedProject = document.querySelector('#project').value;

    //New object/todo-item is created by calling above factory function.
    const newTodo = CreateTodo(titleValue, descriptionValue, dateValue, selectedPriority, selectedProject)
    if (newTodo.title === '' || newTodo.description === '') {
        return alert("Please fill up atleast title and desciption.")
    } else {
        addTodoObject(newTodo);
    };

    //Function that adds object inside an [todoList] Array.
    function addTodoObject(items) {
        todoList.push(items);
    }
    renderTodoList(todoList);


}

//Render the todo-items.
const itemWrapper = document.querySelector('.item-wrapper');
const todoItem = document.createElement('div');
function renderTodoList(todoList) {
    console.log("run")
    let list;
    for (let i = 0; i < todoList.length; i++) {
        list = todoList[i];
    }

    todoItem.classList.add('todo-item');

    if (list.priority === 'high') {
        todoItem.classList.add('high')
    }
    if (list.priority === 'medium') {
        todoItem.classList.add('medium')
    }
    if (list.priority === 'low') {
        todoItem.classList.add('low')
    }

    todoItem.innerHTML = `
      <input type="radio" class="radio">
      <h3>${list.title}</h3>
      <p class="description">${list.description}</p>
      <div class="date-project">
        <p>${list.date} </p>
        <p>${list.project}</p>
      </div>
      <button class="edit">Edit</button><button class="delete cancel">X</button>`

}
itemWrapper.appendChild(todoItem);

function formEventHandler() {
    const event = formController()

    const addTodoBtn = document.getElementById('add-todo-btn');
    const cancelBtn = document.getElementById('cancel');
    const addBtn = document.getElementById('add')

    addTodoBtn.addEventListener('click', event.showTodoForm);
    cancelBtn.addEventListener('click', event.hideTodoForm);
    addBtn.addEventListener('click', addTodoItems);

    //deletes toditems from list
    const deleteBtns = document.querySelectorAll('.delete')
    deleteBtns.forEach(btn => {
        btn.addEventListener('click', function deleteTodoItem(e) {
            e.target.parentElement.remove();
        });
    })
}
formEventHandler();


export { addTodoItems, formEventHandler }