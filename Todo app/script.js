let addBtn=document.querySelector('.addBtn');
addBtn.addEventListener('click',addTask);

function addTask(){
  let inputElem=document.querySelector('.input');
  let data=inputElem.value;

  if(data==""){
    alert("Please add a task");
    return;
  }
  inputElem.value="";
  let ul=document.querySelector('.task-list');
  let li=document.createElement('li');
  li.innerHTML=data;
  ul.appendChild(li);

  let delBtn=document.createElement('button');
  let span=document.createElement('span');
  delBtn.innerHTML=`<i class="fa-sharp fa-solid fa-x"></i>`;
  delBtn.classList.add("set-right");
  span.appendChild(delBtn);
  li.appendChild(span);

  deleteTask(delBtn);
  
}

// for delete the todo
function deleteTask(deleteBtn) {
  deleteBtn.addEventListener('click', function() {
    this.parentElement.parentElement.remove();
  });
}
