let inputBox=document.getElementById("input-box");
let listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value===''){
        alert("You must have to write Somethings");
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}


listContainer.addEventListener('click',function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();


// Important Note: Above Two Fucntion is used to 
// Store the data in Browser As it is