const addbutton = document.querySelector('.bnt_add')
const input = document.querySelector(".add__")
const taskList = document.querySelector('.tasklist')




const myTask = function(){
    addbutton.addEventListener('click',function(){

        
        
        
        const task = input.value
        const newTask = document.createElement('li')
        const taskText = document.createElement('span');
        const checkbox = document.createElement('input'); 
        
        if (task !== '')  {
          
        checkbox.type = 'checkbox';
        checkbox.classList.add('task-checkbox');
        newTask.classList.add('task-item')

        newTask.textContent = task;
        newTask.appendChild(checkbox);
        taskList.appendChild(newTask); 
        taskList.appendChild(taskText);
        
        input.value = '';

        checkbox.addEventListener('click', function() {
            setTimeout(function() {
              newTask.remove();
            }, 1000); 
          });  
        }
    })
}

myTask()
 
