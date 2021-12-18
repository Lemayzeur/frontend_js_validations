const submitHandler = (event) => {
    event.preventDefault();

    let inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        validateField(input);
    })
}

const validateField = (input) => {
    const { value } = input;
    let errors = [];

    if(!value || value.length < 1){
        errors.push('chan sa obligatwa');
    }

    let displayBox = input.nextElementSibling;

    displayBox.innerHTML = "";
    if (errors.length > 0){  
        errors.forEach(er => displayBox.innerHTML += er)      
        displayBox.style.display = "inline-block";       
    }else{
        displayBox.style.display = "none";   
    }
}

const updateFieldHandler = (event) => {
    validateField(event.target)
}

document.getElementById('form').addEventListener('submit', submitHandler);

let inputs = document.querySelectorAll("input");
inputs.forEach(input => {
    input.addEventListener('input', updateFieldHandler, false)
})