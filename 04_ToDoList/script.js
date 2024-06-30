const box= document.getElementById("box");
const task = document.getElementById("task");
const listContainer = document.getElementById("list-container");
const button = document.getAttribute("button");

function addTask(){
    if(task.innerHTML===" "){
        alert("Please enter a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = task.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    task.value=" ";
}