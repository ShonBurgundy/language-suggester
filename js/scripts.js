//Back-End (Business Logic)











//Front-End (User interface logic)

$(document).ready(function() {
  $("#submitbutton").submit(function() {
    var animal = $("animal-input").val();
    var meal = $("meal-input").val();
    var experience = $("exp-input").val();
    var prefer = $("pref-input").val();
    var holiday = $("holiday-input").val();
    var result;

    if (animal === "Dogs" && meal === "Steak & Eggs" && experience === "None" &&  prefer === "Mac" && holiday === "Batman Day")


  });
});  