





//Front End Logic
$(document).ready(function() {

  $("#form").submit(function(event) {
    event.preventDefault();

    var userNumber = $("#userInput").val();

    $(".userResult").text(userNumber)
  });
});
