// --- Front-end logic
$(document).ready(function() {

  $("#form").submit(function(event) {
    event.preventDefault();

    var userNumber = $("#userInput").val();
    var userOutput = convertedNumber(userNumber)

    $(".userResult").text(userOutput)
  });
});


// --- Back-end logic
  function convertedNumber(string) {
    var initialInput = parseInt(string);

    if (isNotNum(string)) {
      alert("Please enter a valid number");
    } else if (string.includes(0)) {
      alert("Beep!");
    } else if (string.includes(1)) {
      alert("Boop!");
    }
  };


// --- Check if string has a number
    function isNotNum(string) {
      var regex = /[^0-9]/;
      return regex.test(string);
    }


// --- End of convertedNumber function

// --- Check string for 1s
  // function hasOne(string) {
  //   return string.includes(1);
  // }

// --- Check string for 0s
//   function hasZero(string) {
//     return string.includes(0);
//   }
