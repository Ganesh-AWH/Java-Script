const todoList = [];

displayTodo();
function addTodo1(){
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;
  if(name)
  todoList.push(name);
console.log(todoList);
}

function addTodo2(){
  const inputElement2= document.querySelector('.js-input-2');
  const name2 = inputElement2.value;
  if(name2){
    todoList.push(name2);
  }
  inputElement2.value = '';

  displayTodo();
}

function displayTodo(){
  let todoListHtml = '';
  for(let i = 0; i< todoList.length; i++){
    const toDo = todoList[i];
    const html = `<p>${toDo}</p>`;
    todoListHtml += html;
  }
  document.querySelector('.js-output').innerHTML = todoListHtml;
}
