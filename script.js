// element selection ----
let userNameInput = document.querySelector("[name='username']");
let emailInput = document.querySelector("[name='email']");
let passwordInput = document.querySelector("[name='password']");
let submitBtn = document.querySelector("[type='submit']");
let form = document.forms[0]; // form selected

// style ----
submitBtn.className = "my-2" ;
emailInput.className = "my-2" ;

document.body.cssText = "display:flex; align-items:center; justify-content:center; height:100dvh; background-color:rgb(43, 59, 86);" ;

// onload page function 
window.onload = function (){
  userNameInput.focus();
};

form.onsubmit = function (validation){
  // form validation code 
  let userValidation = false ;
  let emailValidation = false ;
  let passwordValidation = false ;
  let passCode = "Admin_Admin" ;
  let userCode = "MohamedZidan" ;

  if (userNameInput.value === '' || userNameInput.value != userCode){
    userValidation = false ;
    userNameInput.setAttribute("class","d-block my-2 border border-3 border-danger");
  } else if (userNameInput.value != '' && userNameInput.value === userCode) {
    userValidation = true ;
    userNameInput.classList.remove("border-danger");
    userNameInput.classList.add("border-success");
  }

  if (!emailInput.value.includes("hossame")){
    emailValidation = false ;
    emailInput.setAttribute("class","d-block my-2 border border-3 border-danger");
  } else if (emailInput.value.includes("hossame")) {
    emailValidation = true ;
    emailInput.classList.remove("border-danger");
    emailInput.classList.add("border-success");
  }

  if (passwordInput.value != passCode){
    passwordValidation = false ;
    passwordInput.setAttribute("class","d-block my-2 border border-3 border-danger");
  } else if (passwordInput.value === passCode){
    passwordValidation = true ;
    passwordInput.classList.remove("border-danger");
    passwordInput.classList.add("border-success");
  }

  if (userValidation === false || emailValidation === false || passwordValidation === false){
    validation.preventDefault();
  }
};
