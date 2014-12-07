$(document).ready(function () {
  var survey = {
    id: $("#clientId").text(),
    date: new Date()
  };

  $("form input[type='radio']").on("click", function () {
    var feeling = $("form input[type='radio']:checked").val();
    if (survey.feeling && survey.feeling != feeling) {
      var label = happinesses[survey.feeling];
      $("#" + label)[0].src = "img/" + label + "_black.png";
    }
    survey.feeling = feeling;

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

  var happinesses = ["verysad", "littlesad", "littlehappy", "veryhappy"];
  for (i in happinesses) {
    var it = happinesses[i];
    var index = new Number(i);
    setMouseoverImages(it, index);
  }
  function setMouseoverImages(label, index) {
    $("#" + label).on("mouseover", function (event) {
      event.target.src = "img/" + label + "_white.png";
    });
    $("#" + label).on("mouseout", function (event) {
      if (survey.feeling != index) {
        event.target.src = "img/" + label + "_black.png";
      }
    });
  }

});
