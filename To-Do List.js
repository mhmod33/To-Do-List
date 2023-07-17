const inputbox = document.getElementById("rectangle");
const list = document.getElementById("list");

function addtask() {
  if (inputbox.value === "") {
    alert("You must type something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    
    let span = document.createElement("span");
    span.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M20 1.61143L18.3886 0L12 6.38857L5.61143 0L4 1.61143L10.3886 8L4 14.3886L5.61143 16L12 9.61143L18.3886 16L20 14.3886L13.6114 8L20 1.61143Z" fill="#616161"/>
  </svg>`;
      span.addEventListener("click", function() {
      li.remove(); 
    });
    
    li.appendChild(span); 
    list.appendChild(li);
  }
  
  inputbox.value = "";
}
list.addEventListener("click", function(e) {
if (e.target.tagName==="LI") {
  e.target.classList.toggle("checked"); 
}
else if(e.target.tagName==="SPAN"){
e.target.parentElement.remove();
}
},false);
function saveData(){
  localStorage.setItem("data",list.innerHTML);
}
function showTask(){
  list.innerHTML=localStorage.getItem("data");
}
window.onload = function() {
  showTask();
}