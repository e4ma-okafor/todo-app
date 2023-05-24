const taskBtn = document.getElementById("taskBtn");
const taskDeleteBtn = document.getElementById('deleteBtn');
let newDate = document.getElementById("date");
let taskList = document.getElementById("taskList");
let tName = document.getElementById("taskName");
let tTime = document.getElementById("taskTime");
let checkbox = document.getElementById("cbox");

const today = new Date();
newDate.innerHTML = today.toLocaleDateString();

let taskArr = [];

function updateUI(arrayItem) {  
    let listItem = ``;  
    arrayItem.forEach((item) => {           
        listItem +=    `<li class="task-item">
                            <div>
                                <div class="d-flex justify-content-end icons">
                                    <i class="bi bi-pencil me-3 font-25 edit-icon" onclick="taskEdit(${item.id})"></i>
                                    <i class="bi bi-x-lg font-25" onclick="deleteTask(${item.id})"></i>                                
                                </div>
                                <div class="d-flex w-100 justify-content-between">
                                    <input type="checkbox" id="cbox">
                                    <label class="ms-2 editBox"style="width: 90%;"><span id="editTask">${item.task}</span></br><span class="text-secondary" id="editTime">${item.time}</span></label>                                
                                </div>                            
                            </div>                        
                        </li>`;                 
    })     
    taskList.innerHTML = listItem;         
};

function addNewTask() {    
    var taskName = tName.value;
    var taskTime = tTime.value;

    taskArr.push({
        task: taskName,
        time: taskTime,
        id: Date.now(),
    });
    updateUI(taskArr); 
    
    tName.value = '';
    tTime.value ='';
}    
taskBtn.addEventListener("click", addNewTask);

let deleteTask = (taskId) => {
    taskArr = taskArr.filter((item) => item.id != taskId);
    updateUI(taskArr);
} 

let taskEdit = () => {
    
    updateUI(taskArr);    
}

function deleteTasks() {
    const taskItems = document.querySelectorAll(".task-item");
    taskItems.forEach((taskItem) => {
        if (taskItem.querySelector("#cbox").checked) {
            taskItem.remove();
        }
    });
}
taskDeleteBtn.addEventListener("click", deleteTasks);