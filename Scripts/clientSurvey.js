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
      $("#divNavigation").removeAttr("hidden");
    }
  });

  $("form input[type='checkbox']").on("click", function () {
    survey.sadAbout = [];
    $("form input[type='checkbox']:checked").each(function () {
      survey.sadAbout.push($(this).val());
    });
    $("#divSadReason").removeAttr("hidden");
    $("#next-1").removeAttr("hidden");
  });

  $("#divHappyComment").on("keypress", function () {
    survey.happyComment = $("#comment").val();
  });

  $("#reason").bind('keypress', function () {
    var reason = $(this).val();
    survey.reason = reason;
  });

  $("input[name='next']").on("click", function nextPage() {
    var pageNumber = $(this).parent()[0].id.split("-")[1];
    var pageOffId = '#page-' + pageNumber;
    var pageOnId = '#page-' + (new Number(pageNumber) + 1);
    $(pageOffId).hide();
    $(pageOnId).show();
  });

  $("form input[type='submit']").on("click", function () {
    var submit = $(this).val();
  });
});
