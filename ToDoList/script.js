const inputbox=document.getElementById('inputbox')
const listContainer=document.getElementById('list')

function addTask(){
    if (inputbox.value==''){
        alert('Please enter an item')
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputbox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.classList.add('closebut');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputbox.value = '';
    saveData();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();

    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// local storage function to set
function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}
// local storage function to get
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();