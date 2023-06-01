
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
    function deleteTodoItem(e) {
        e.target.parentElement.remove();
    }

    return { showTodoForm, hideTodoForm, deleteTodoItem }
}

const todoList = []; //array which holds list of objects/todo-items.

//Access value from todo-form and adds items into the array.
function addTodoItems() {
    const titleValue = document.querySelector('#title');
    const descriptionValue = document.querySelector('#description-box');
    const dateValue = document.querySelector('#date');
    const selectedPriority = document.querySelector('#priority');
    const selectedProject = document.querySelector('#project');

    //New object/todo-item is created by calling above factory function.
    const newTodo = CreateTodo(titleValue.value, descriptionValue.value, dateValue.value, selectedPriority.value, selectedProject.value)
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

    function updateInputForm() {
        console.log(titleValue.value);
        titleValue.value = '';
        descriptionValue.value = '';
        dateValue.value = '';
        selectedPriority.value = '';
        selectedProject.value = '';
    }
    updateInputForm()

}

//Render the todo-items.
const itemWrapper = document.querySelector('.item-wrapper');
function renderTodoList(todoList) {
    const todoItem = document.createElement('div');
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
      <input type="checkbox" class="checkbox">
      <h3>${list.title}</h3>
      <p class="description">${list.description}</p>
      <div class="date-project">
        <p>${list.date} </p>
        <p>${list.project}</p>
      </div>
      <button class="edit">Edit</button><button class="delete cancel">X</button>`

    itemWrapper.appendChild(todoItem);
}


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
        btn.onclick = (e) => event.deleteTodoItem(e);
    })
}
formEventHandler();


export { addTodoItems, formEventHandler }