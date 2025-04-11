//your JS code here. If required.
let username = document.getElementById("username");
let pass = document.getElementById("password");
let checkbox = document.getElementById("checkbox");
let mybtn = document.getElementById("submit");
let form = document.getElementById("form");

let loginBtn = document.getElementById("existing");

form.addEventListener("submit",(e)=>{
  e.preventDefault();

  if(!checkbox.checked){
    alert(`Logged in as ${username.value}`);
    localStorage.clear();
  }
  else{
    alert(`Logged in as ${username.value}`);
    localStorage.setItem("username",username.value);
    localStorage.setItem("password",pass.value);
  }

})

if(localStorage.getItem("username")){
  form.classList.add("hidden");
  loginBtn.classList.remove("hidden");
}

loginBtn.addEventListener("click",()=>{
  alert(`Logged in as ${localStorage.getItem("username")}`);
})
