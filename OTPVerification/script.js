// const inputs=document.querySelectorAll('input'),
//     button=document.querySelector('button');

//     // console.log(inputs,button);

// inputs.forEach((input, index1) => {
//     input.addEventListener('keyup', (e)=>{
//         const currentInput=input,
//             nextInput=input.nextElementSibling,
//             prevInput=input.previousElementSibling;

//          if (currentInput.value.length>1){
//         currentInput.value='';
//         return;
//     }

//     if (nextInput && nextInput.hasAttribute('disabled') && currentInput.value!==''){
//         nextInput.removeAttribute('disabled');
//         nextInput.focus();
//     }

//     if (e.key === 'Backspace'){
//         inputs.forEach((input,index2) =>{
            
//             if (index1 <= index2 && prevInput){
//             input.setAttribute('disabled',true);
//             currentInput.value='';
//             prevInput.focus();
//         }
//         });
//     }   

//     if(!inputs[3].disabled && inputs[3].value !==''){
//         button.classList.add('active');
//         return;
//     }
//     button.classList.remove('active');

//     });
// });

// window.addEventListener('load', () => inputs[0].focus());


const inputs = document.querySelectorAll('input'),
      button = document.querySelector('button'),
      message = document.getElementById('otp-message'),
      inputField = document.querySelector('.input-field');

// Add listeners for each input
inputs.forEach((input, index) => {
  input.addEventListener('keyup', (e) => {
    const currentInput = input,
          nextInput = input.nextElementSibling,
          prevInput = input.previousElementSibling;

    // Ensure only one character stays (handle typing/paste)
    if (currentInput.value.length > 1) {
      currentInput.value = currentInput.value.charAt(0);
    }

    // Move forward when a digit is entered
    if (nextInput && nextInput.hasAttribute('disabled') && currentInput.value !== '') {
      nextInput.removeAttribute('disabled');
      nextInput.focus();
    }

    // Handle backspace
    if (e.key === 'Backspace' && prevInput) {
      currentInput.value = '';
      currentInput.setAttribute('disabled', true);
      prevInput.focus();
    }

     

    // Check if all inputs are filled
    const allFilled = Array.from(inputs).every(inp => inp.value !== '');
    if (allFilled) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
});


    //   const button = document.querySelector(".button");

     button.addEventListener("click", (e) => {
        e.preventDefault();
        button.classList.add("animate");
        setTimeout(() => {
          button.classList.remove("animate");
        //   console.log('hi');
        }, 1000);

         const isValid = Math.random() > 0.5; // 50% chance
  message.style.display = "block";

  if (isValid) {
    // ✅ SUCCESS
    inputField.style.display = "none";
    message.style.color = "green";
    message.textContent = "✅ Your OTP is verified successfully!";
    button.disabled = true; // disable button permanently
    button.style.cursor = "not-allowed";
    button.classList.remove("active");

  } else {
    // ❌ INVALID
    message.style.color = "red";
    message.textContent = "❌ Invalid or wrong OTP, please try again.";

    // reset inputs
    inputs.forEach((inp, i) => {
      inp.value = "";
      if (i === 0) {
        inp.removeAttribute("disabled");
      } else {
        inp.setAttribute("disabled", true);
      }
    });

    inputField.style.display = "flex"; // show inputs again
    inputs[0].focus();
    button.classList.remove("active");
  }
      });

// Focus first input on page load
window.addEventListener('load', () => inputs[0].focus());
