let todoList = JSON.parse(localStorage.getItem('localList')) || [{
  name: '',
  dueDate: ''
}];

displayList();


function todoAdd(){
  
  const inputElement = document.querySelector('.js-name-input');
  const dateElement = document.querySelector('.js-date-input');

  const name = inputElement.value;
  const dueDate = dateElement.value; 
  
  if(name && dueDate){
    todoList.push({
      name,
      dueDate
      //short Hand
      // name: name,
      // dueDate: dueDate,
  });
  }

  inputElement.value = '';
  displayList();
  saveToStorage();
}
function displayList(){
  let toListHtml = '';
  for(let i in todoList){

    const toDoObject = todoList[i];
    const {name,dueDate} = toDoObject;
    // const name = toDoObject.name;
    // const duDate = toDoObject.dueDate;
    if(name && dueDate){
      toListHtml += `
        <div class="todo-output">${name}</div>
        <div class="todo-output">${dueDate}</div>
        <button onclick="
          todoList.splice(${i},1);
          displayList();
        " class="todo-delete-button">Delete</button>
      `;
    }
  }

  document.querySelector('.js-result').innerHTML = toListHtml;
}

function saveToStorage(){
  localStorage.setItem('localList',JSON.stringify(todoList));
}