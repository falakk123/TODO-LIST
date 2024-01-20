var taskInput = document.getElementById('Input');
var addButton = document.getElementById('addButton');
var taskList = document.getElementById('removeList');
const deleteAll = document.getElementById('deleteAll')

addButton.addEventListener('click', addTask);
function addTask() {
  var taskText = Input.value;
  
  if (taskText !== '') {
    var li = document.createElement('li');
    li.textContent = taskText;
    var deleteButton = document.createElement('button');

    deleteButton.textContent = 'Delete';


    deleteButton.classList.add('deleteButton');


    deleteButton.addEventListener('click', deleteTask);
    li.appendChild(deleteButton);


    taskList.appendChild(li);
    Input.value = '';
  }
}

function deleteTask(event) {
  var listItem = event.target.parentNode;
  removeList.removeChild(listItem);
}

deleteAll.addEventListener("click",(e)=>{
e.preventDefault()
taskList.innerHTML = " "
})