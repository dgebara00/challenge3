let $moonBtn;
let $sunBtn;
let $selectCSS;
let $ulList;
let $cross;
let $incompletedAmount;
let $input;
let $cls;
let $onlyCompletedBtnDesktop;
let $onlyActiveBtnDesktop;
let $allTasksBtnDesktop;
let $onlyCompletedBtnMobile;
let $onlyActiveBtnMobile;
let $allTasksBtnMobile;

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
    count();
};
const prepareDOMElements = () => {
    $moonBtn = document.querySelector('.fa-moon');
    $sunBtn = document.querySelector('.fa-sun');
    $selectCSS = document.querySelectorAll('link')[3];
    $ulList = document.querySelector('.todo_list__tasks');
    $cross = document.querySelector('.todo_list__delete');
    $incompletedAmount = document.querySelector('.todo_list__incompleted');
    $input = document.querySelector('.page__input');
    $cls = document.querySelector('.todo_list__cls-completed');
    $onlyCompletedBtnDesktop = document.querySelector('.todo_list__button--completedDesktop');
    $onlyCompletedBtnMobile = document.querySelector('.todo_list__button--completedMobile');
    $onlyActiveBtnDesktop = document.querySelector('.todo_list__button--remainedDesktop');
    $onlyActiveBtnMobile = document.querySelector('.todo_list__button--remainedMobile');
    $allTasksBtnDesktop = document.querySelector('.todo_list__button--allDesktop');
    $allTasksBtnMobile = document.querySelector('.todo_list__button--allMobile');
};
const prepareDOMEvents = () => {
    $moonBtn.addEventListener('click', darkMode);
    $sunBtn.addEventListener('click', lightMode);
    $ulList.addEventListener('click', modify);
    $input.addEventListener('keydown', newTask);
    $cls.addEventListener('click', removeAll);
    $onlyCompletedBtnDesktop.addEventListener('click', allCompletedDesktop);
    $onlyCompletedBtnMobile.addEventListener('click',  allCompletedMobile);
    $onlyActiveBtnDesktop.addEventListener('click', allActiveDesktop);
    $onlyActiveBtnMobile.addEventListener('click',  allActiveMobile);
    $allTasksBtnDesktop.addEventListener('click', everyTaskDesktop);
    $allTasksBtnMobile.addEventListener('click',  everyTaskMobile);
};
const darkMode = () => {
    $selectCSS.setAttribute("href", "css/dark-style.css");
    $moonBtn.classList.add('hide');
    $sunBtn.classList.remove('hide');
};
const lightMode = () => {
    $selectCSS.setAttribute("href", "css/light-style.css");
    $sunBtn.classList.add('hide');
    $moonBtn.classList.remove('hide');
};
const modify = (e) => {
    if(e.target.classList.contains('todo_list__check')){
        e.target.classList.toggle('todo_list__check--complete');
        e.target.nextElementSibling.classList.toggle('todo_list__task--completed');
        count();
    }
    else if(e.target.classList.contains('todo_list__delete')){
        e.target.closest('li').remove();
        count();
    }
    else{
        return 0;
    }
};
const newTask = (e) => {
    if(e.key == "Enter" && $input.value != ""){
        let newTask = document.createElement('li');
        newTask.classList.add('todo_list__item')
        $ulList.appendChild(newTask)
        
        let submit = document.createElement('div');
        submit.classList.add('todo_list__check');
        newTask.appendChild(submit);

        let taskValue = document.createElement('span');
        taskValue.classList.add('todo_list__task');
        taskValue.innerHTML = $input.value;
        newTask.appendChild(taskValue);

        let deleteTask = document.createElement('img');
        deleteTask.classList.add('todo_list__delete');
        deleteTask.setAttribute("src", "images/icon-cross.svg");
        newTask.appendChild(deleteTask);

        $input.value = "";
        count();
    }
};
const removeAll = () => {
    let allTasksCompleted = document.querySelectorAll('.todo_list__task--completed');
    for(let i=0; i<allTasksCompleted.length; i++){
       allTasksCompleted[i].closest('li').remove();
    }
};

const count = () => {
   let allTasks = document.querySelectorAll('.todo_list__task');
   let allTasksCompleted = document.querySelectorAll('.todo_list__task--completed');
   let summary = allTasks.length - allTasksCompleted.length;
   if(summary == 0){
       $incompletedAmount.innerHTML = `${summary} item left.`;
   }
   else{
       $incompletedAmount.innerHTML = `${summary} items left.`;
   }
};

            // ******desktop status buttons*******
const allCompletedDesktop = () => {
    $onlyCompletedBtnDesktop.classList.add('todo_list__button--active');
    $allTasksBtnDesktop.classList.remove('todo_list__button--active');
    $onlyActiveBtnDesktop.classList.remove('todo_list__button--active');
    let allTasks = document.querySelectorAll('.todo_list__task');
    for(let i=0; i<allTasks.length; i++){
        if(allTasks[i].classList.contains("todo_list__task--completed")){
            allTasks[i].closest('li').style.display = "flex";
        }
        else{
            allTasks[i].closest('li').style.display = "none";
        }
    }
};
const allActiveDesktop = () => {
    $allTasksBtnDesktop.classList.remove('todo_list__button--active');
    $onlyCompletedBtnDesktop.classList.remove('todo_list__button--active');
    $onlyActiveBtnDesktop.classList.add('todo_list__button--active');
    let allTasks = document.querySelectorAll('.todo_list__task');
    for(let i=0; i<allTasks.length; i++){
        if(allTasks[i].classList.contains("todo_list__task--completed")){
            allTasks[i].closest('li').style.display = "none";
        }
        else{
            allTasks[i].closest('li').style.display = "flex";
        }
    }
};
const everyTaskDesktop = () => {
    $allTasksBtnDesktop.classList.add('todo_list__button--active');
    $onlyCompletedBtnDesktop.classList.remove('todo_list__button--active');
    $onlyActiveBtnDesktop.classList.remove('todo_list__button--active');
    let allTasks = document.querySelectorAll('.todo_list__task');
    for(let i=0; i<allTasks.length; i++){
        allTasks[i].closest('li').style.display = "flex";
    }
}

                // ******mobile status buttons*******

const allCompletedMobile = () => {
    $onlyCompletedBtnMobile.classList.add('todo_list__button--active');
    $allTasksBtnMobile.classList.remove('todo_list__button--active');
    $onlyActiveBtnMobile.classList.remove('todo_list__button--active');
    let allTasks = document.querySelectorAll('.todo_list__task');
    for(let i=0; i<allTasks.length; i++){
        if(allTasks[i].classList.contains("todo_list__task--completed")){
            allTasks[i].closest('li').style.display = "flex";
        }
        else{
            allTasks[i].closest('li').style.display = "none";
        }
    }
};
const allActiveMobile = () => {
    $allTasksBtnMobile.classList.remove('todo_list__button--active');
    $onlyCompletedBtnMobile.classList.remove('todo_list__button--active');
    $onlyActiveBtnMobile.classList.add('todo_list__button--active');
    let allTasks = document.querySelectorAll('.todo_list__task');
    for(let i=0; i<allTasks.length; i++){
        if(allTasks[i].classList.contains("todo_list__task--completed")){
            allTasks[i].closest('li').style.display = "none";
        }
        else{
            allTasks[i].closest('li').style.display = "flex";
        }
    }
};
const everyTaskMobile = () => {
    $allTasksBtnMobile.classList.add('todo_list__button--active');
    $onlyCompletedBtnMobile.classList.remove('todo_list__button--active');
    $onlyActiveBtnMobile.classList.remove('todo_list__button--active');
    let allTasks = document.querySelectorAll('.todo_list__task');
    for(let i=0; i<allTasks.length; i++){
        allTasks[i].closest('li').style.display = "flex";
    }
}

document.addEventListener('DOMContentLoaded', main);