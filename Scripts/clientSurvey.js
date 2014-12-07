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
      $("#next-1").removeAttr("hidden");
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
    survey.reason = $(this).val();
  });

  $("#otherQuestionAnswer").bind('keypress', function () {
    survey.otherAnswer = $(this).val();
  });

  $("input[name='next']").on("click", function nextPage() {
    var pageNumber = $(this).parent()[0].id.split("-")[1];
    var pageOffId = '#page-' + pageNumber;
    var pageOnId = '#page-' + (new Number(pageNumber) + 1);
    $(pageOffId).hide();
    $(pageOnId).show();
  });

  $("#verysad").on("mouseover", function (event) {
    event.target.src = "img/verysad_white.png";
  });
  $("#verysad").on("mouseout", function (event) {
    event.target.src = "img/verysad_black.png";
  });

  $("#littlesad").on("mouseover", function (event) {
    event.target.src = "img/littlesad_white.png";
  });
  $("#littlesad").on("mouseout", function (event) {
    event.target.src = "img/littlesad_black.png";
  });

  $("#littlehappy").on("mouseover", function (event) {
    event.target.src = "img/littlehappy_white.png";
  });
  $("#littlehappy").on("mouseout", function (event) {
    event.target.src = "img/littlehappy_black.png";
  });

  $("#veryhappy").on("mouseover", function (event) {
    event.target.src = "img/veryhappy_white.png";
  });
  $("#veryhappy").on("mouseout", function (event) {
    event.target.src = "img/veryhappy_black.png";
  });
});
