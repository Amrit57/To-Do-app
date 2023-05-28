function CreateTodo(title, description, date, priority, project) {
    return { title, description, date, priority, project };
}


function accesFormInput() {
    const titleValue = document.querySelector('#title').value;
    const descriptionValue = document.querySelector('#description-box').value;
    const dateValue = document.querySelector('#date').value;
    const selectedPriority = document.querySelector('#priority').value
    const selectedProject = document.querySelector('#project').value;

    const newTodo = CreateTodo(titleValue, descriptionValue, dateValue, selectedPriority, selectedProject)
    const todoList = [];

    function addtodoItem() {
        todoList.push(newTodo);
        console.log(todoList);
    }
    addtodoItem();
}

function formController() {
    const showTodoForm = () => {
        const todoInput = document.querySelector('.todo');
        todoInput.classList.remove('displayNone');
    }
    const hideTodoForm = () => {
        const todoInput = document.querySelector('.todo');
        todoInput.classList.add('displayNone');
    }
    return { showTodoForm, hideTodoForm }
}


function formEventHandler() {
    const event = formController()
    const accessForm = accesFormInput;
    // const addTodoObject = createtodoList()

    const addTodoBtn = document.getElementById('add-todo-btn');
    const cancelBtn = document.getElementById('cancel');
    const addBtn = document.getElementById('add')

    addTodoBtn.addEventListener('click', event.showTodoForm);
    cancelBtn.addEventListener('click', event.hideTodoForm);
    addBtn.addEventListener('click', accesFormInput)
}
formEventHandler();


export { accesFormInput, formEventHandler }