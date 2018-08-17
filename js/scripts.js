// --- Back-end logic
  function convertedNumber(string) {
    var initialInput = parseInt(string);

    if (isNotNum(string)) {
      alert("Please enter a valid number");
    } else if ((hasZero(string))) {
      alert("Beep!");
    } else if (initialInput === 1) {
      alert("Boop!");
    }

  };
// --- End of convertedNumber function



// --- Check string for 0s
  function hasZero(string) {
    var zero = 0
    return string.includes(0);
  }





// --- Check if string has a number
  function isNotNum(string) {
    var regex = /[^0-9]/;
    return regex.test(string);
  }


// --- Front-end logic
$(document).ready(function() {

  $("#form").submit(function(event) {
    event.preventDefault();

    var userNumber = $("#userInput").val();
    var userOutput = convertedNumber(userNumber)

    $(".userResult").text(userOutput)
  });
});
