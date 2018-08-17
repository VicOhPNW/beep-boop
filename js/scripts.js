// --- Front-end logic
$(document).ready(function() {

  $("#form").submit(function(event) {
    event.preventDefault();

    var userNumber = $("#userInput").val();
    var userOutput = convertedNumber(userNumber)

    function convertedNumber(string) {
      var initialInput = parseInt(string);
      if (isNotNum(string)) {
        alert("Please enter a valid number");
      } else if ((string.includes(1)) && (string.includes(0)) || (string.includes(1))) {
        alert("Boop!");
      } else if (string.includes(0)) {
        alert("Beep!");
      } else if (otherNumbers(string)) {
        $(".userResult").text(resultsArray)
      }
    };  // --- End of convertedNumber function

    $(".userResult").text(userOutput)
  });

// --- Check if string has a number
      function isNotNum(string) {
        var regex = /[^0-9]/;
        return regex.test(string);
      }

// --- String counts up to given number. Loop works but uncertain how to separate back-end with front-end and/or refactor.
      function otherNumbers(string) {
        var resultsArray = [];
        for (var index = 0; index <= string; index += 1) {
        resultsArray.push(index);
        $(".userResult").text(resultsArray)
        }
      }
});

// // --- Check if string has letters. Not using, was part of test.
//   function isALetter(string) {
//     var regex = /[a-zA-Z]/;
//     return regex.test(string);
//   }


// --- Check string for 1s
  // function hasOne(string) {
  //   return string.includes(1);
  // }


// --- Check string for 0s
//   function hasZero(string) {
//     return string.includes(0);
//   }
