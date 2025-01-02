// Selecting the input fields
const nameVal = document.getElementById("name-value")
const emailVal = document.getElementById("email-value")
const pwdVal = document.getElementById("pwd-value")
const phnVal = document.getElementById("phone-value")

// Selecting span for Err Msg
const nameErr = document.getElementById("name-error")
const emailErr = document.getElementById("email-error")
const pwdErr = document.getElementById("pwd-error")
const phnErr = document.getElementById("phone-error")

// Selecting the button
const btn = document.getElementById("btn")

// Selecting the form.
const form = document.querySelector("form")

// Function to handler the nameValue field
function nameHandler(){
  let name = nameVal.value
  
  if(name.length === 0){
     btn.disabled = true
     nameErr.textContent = "Name is Required"
     return false
  }
  btn.disabled = false
  nameErr.innerHTML = `<ion-icon name="checkmark-circle"></ion-icon>`
  return true 
}

// Adding event for input field
nameVal.addEventListener("keyup", nameHandler)
nameVal.addEventListener("blur", nameHandler)

// Adding event for form
form.addEventListener("submit", (event)=>{
   event.preventDefault()

  if(!nameHandler()){
    return false
  }
  
})
