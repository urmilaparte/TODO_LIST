
const addbtn = document.getElementById("add");
const task = document.getElementsByClassName("task");
const alltask = document.querySelector(".box");

function addtodo() {
    let para = document.createElement("li");
    para.innerHTML = `
        ${task[0].value}
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    `;
    alltask.appendChild(para);
}

// Adding the task
addbtn.addEventListener("click", function () {
    if (task[0].value.trim() !== "") { 
        addtodo();
        task[0].value = ""; 
    }
});

// delete and edit 
alltask.addEventListener("click", function (event) {
    const touch = event.target;

    // Delete function
    if (touch.classList.contains('delete')) {
        touch.parentElement.remove(); 
    }
           // edit function
    if (touch.classList.contains('edit')) {
        const li = touch.parentElement; // Get the parent <li>
        const currentText = li.childNodes[0].nodeValue.trim(); 
        const newTask = prompt("Edit your task:", currentText); 

        if (newTask !== null && newTask.trim() !== "") {
            li.childNodes[0].nodeValue = newTask; 
        }
    }
});

























// const addbtn = document.getElementById('add');

// addbtn.addEventListener('click',function(){
//     const task = document.getElementById('task').value;
//     console.log(task);

//      localStorage.setItem('task',task);
//         reciveData()

// });

// function reciveData(){
//     let savedata = localStorage.getItem('task');
//     console.log(savedata);

//     let para=  document.getElementById('addtask');
//     para.textContent += savedata;
// }
