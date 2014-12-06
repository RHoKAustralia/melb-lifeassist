$(document).ready(function () {
  var survey = {
    id: $("#clientId").text(),
    date: new Date()
  };

  $("form input[type='radio']").on("click", function () {
    survey.feeling = $("form input[type='radio']:checked").val();

    if (survey.feeling < 2) {
      $(".happy").attr("hidden", "hidden");
      $("#divSadList").removeAttr("hidden");
    } else {
      $(".sad").attr("hidden", "hidden");
      $("#divHappyComment").removeAttr("hidden");
    }
  });  

  $("form input[type='checkbox']").on("click", function () {
    survey.sadAbout = [];
    $("form input[type='checkbox']:checked").each(function () {
      survey.sadAbout.push($(this).val());      
    });
    $("#divSadReason").removeAttr("hidden");
  });

  $("#reason").bind('keypress', function () {
    var reason = $(this).val();
    if (reason.length < 10) {

    } else {
      survey.reason = reason;
      $("#divQuestion").removeAttr("hidden");
    }
  });

  $("form input[type='submit']").on("click", function () {
    var submit = $(this).val();   
  });
});