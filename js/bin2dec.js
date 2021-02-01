window.addEventListener('load', () => {
   activateInputs();
});

let decimal       = 0,
    regExBin      = /^[0-1]+$/,
    decimalSpan   = document.querySelector('#decimalText'),
    errorSpan     = document.querySelector('#auxiliaryText'),
    inputText     = document.querySelector('#input');

function activateInputs() {

   inputText.addEventListener('keyup', () => {
      const value = inputText.value;
      if (value.match(regExBin)) {
         bin2Dec(value);
         decimal = 0;
      } else if (value === "") {
         errorSpan.innerHTML = "";      
         decimalSpan.innerHTML = "";
      } else {
         decimalSpan.innerHTML = "";
         errorSpan.innerHTML = "&#128586; Oops! We only accept 0 or 1!";
      }
   });

}

function bin2Dec(value) {
  
   for (var i = value.length; i !== 0; i--) {
      c = Math.pow(2, value.length - i);
      d = c * (value.charAt(i - 1));
      decimal = d + decimal;
   };
   decimalSpan.innerHTML = decimal;
}