
window.addEventListener("DOMContentLoaded", () => {
   const value = document.getElementById("input");
   const check = document.getElementById("check");
   const response = document.getElementById("response");
   const chances = document.querySelector("span");
   let chancesNum = 5;
   chances.innerHTML = chancesNum;
   const num = 5;
   check.style.opacity = "0.5";
   check.disabled = true;

   value.addEventListener("keyup", () => {
       let length = value.value.length;

       if (length > 0 && length < 4 && value.value <= 100) {
           check.style.opacity = "1";
           check.disabled = false;
       } else {
           check.disabled = true;
           check.style.opacity = "0.5";
       }
   });

   check.addEventListener("click", () => {
       if (value.value < num) {
           response.innerHTML = "Your Number is Low";
       } else if (value.value > num) {
           response.innerHTML = "Your Number is too High";
       } else {
           response.innerHTML = "You are correct";
       }
       chancesNum--;
       chances.innerHTML = chancesNum;
       if (chancesNum <= 0) {
           check.disabled = true;
           check.style.opacity = "0.5";
           value.disabled =true;
           alert("You Have Exhausted Your Chances!!!")
       }
   });
});
