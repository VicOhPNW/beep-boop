// --- Back-end logic
  function convertedNumber(string) {
    var initialInput = parseInt(string);
    if (isNotNum(string)) {
      alert("Please enter a valid number");
    } else {
      alert("it works")
    }

  };
// --- End of convertedNumber function







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
