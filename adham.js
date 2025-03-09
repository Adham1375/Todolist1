function addtask() {
    const taskInput = document.getElementById("taskinput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("tasklist");

        const li = document.createElement("li");
        li.textContent = taskText;

        const delbtn = document.createElement("button");
        delbtn.textContent = "delete";
        delbtn.onclick=function(){
            taskList.removeChild(li);
            savetasks();
        }
        li.appendChild(delbtn);
        taskList.appendChild(li);
        taskInput.value="";
        savetasks();
    }
    else{
        alert("please enter your task")
    }
}

function savetasks(){
    const taskList =  document.getElementById("tasklist");
    const tasks = [];
    for(let i = 0 ; i < taskList.children.length; i++){
        tasks.push(taskList.children[i].textContent.replace("delete","").trim())
    }
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function loadTasks(){
    const taskList = document.getElementById("tasklist");
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(taskText => {
        const li = document.createElement("li");
        li.textContent =  taskText;

        const deletebtn = document.createElement("button");
        deletebtn.textContent = "delete";
        deletebtn.onclick = function(){
            taskList.removeChild(li);
            savetasks()
        };
        li.appendChild(deletebtn);
        taskList.appendChild(li);

        
    })
}
window.onload = loadTasks();
