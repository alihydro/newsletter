document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.querySelector('input[type="text"]');
    const formTextError = document.querySelector('.form-text h1');
    const subscribeButton = document.querySelector('button');
    const confirmationEmailSpan = document.getElementById('confirmationEmail');
 


    emailInput.addEventListener("blur", function () {
      const emailValue = emailInput.value.trim();
      if (!emailValue.includes("@")) {
        formTextError.style.display = "block";
        emailInput.style.color = "hsl(4, 100%, 67%)"; 
        emailInput.style.borderColor = "hsl(4, 100%, 67%)"; 
        emailInput.style.backgroundColor = "rgb(255 98 87 / 16%)";

      } else {
        formTextError.style.display = "none";
      }
    });
    subscribeButton.addEventListener("click", function () {
      const emailValue = emailInput.value.trim();
      if (emailValue.includes("@")) {
        window.location.href = "https://alihydro.github.io/success/";
      }
    });
    
  });
