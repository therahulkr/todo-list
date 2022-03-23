document.querySelector('#push').onclick=function(){
    if(document.querySelector('#newtask input').value.length==0){
        alert("Please enter a task");
    }else{
// adding a task 
        document.querySelector('#tasks').innerHTML +=
        `<div class="task">
            
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
            <i class="far fa-trash-alt"></i>
            </button>
        </div>`;

// delete a task from the tasks box 
        var curr_task = document.querySelectorAll('.delete');
        for(var i=0;i<curr_task.length;i++){
            curr_task[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
// cross out line if a task is complete
    var tasks = document.querySelectorAll('.task');
    for(var i=0;i<tasks.length;i++){
        tasks[i].onclick = function(){
            this.classList.toggle('completed');
        }
    }

// clearing the input field after task added
    document.querySelector('#newtask input').value = "";
}