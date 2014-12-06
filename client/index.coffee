survey =
  id: $('#clientId').text(),
  date: new Date()

buildFeeling = (value, display) ->
  feeling =
    value: value
    display: display

Template.clientSurvey.helpers
  feeling: -> ['miserable', 'a little down', 'chipper', 'manic'].map (it, index) ->
    buildFeeling index, it
  sadValues: -> ['family', 'friends', 'relatives', 'carer']

Template.clientSurvey.events
  'click form input[type="radio"]': (event) ->
    survey.feeling = event.target.value

    if survey.feeling < 2
      $(".happy").attr("hidden", "hidden")
      $("#divSadList").removeAttr("hidden")
    else
      $(".sad").attr("hidden", "hidden")
      $("#divHappyComment").removeAttr("hidden")

  'keydown #reason': (event) ->
    reason = event.target.value
    if reason.length >= 10
      survey.reason = reason;
      $("#divQuestion").removeAttr("hidden")

  'keydown #comment': (event) ->
    console.log event.target.value
