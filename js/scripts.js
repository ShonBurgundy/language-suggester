//Back-End (Business Logic)











//Front-End (User interface logic)

$(document).ready(function() {
  $("#submitbutton").click(function() {
    var animal = $("#animal-input").val();
    var meal = $("#meal-input").val();
    var experience = $("#exp-input").val();
    var prefer = $("#pref-input").val();
    var holiday = $("#holiday-input").val();
    console.log(animal, meal, experience, prefer, holiday)
    var result;

    if (animal === "Dogs" && meal === "Steak & Eggs" && experience === "None" &&  prefer === "Mac" && holiday === "Batman Day") {
      result = "You should look into Ruby!"
    } else if (animal === "Cats" && meal === "Beet Salad" && experience === "A little" &&  prefer === "Lenovo" && holiday === "National Soft Ice Cream Day") {
      result = "You should look into Python!"
    } else if (animal === "Horses" && meal === "Chicken Tendies" && experience === "A plethora" &&  prefer === "Dell" && holiday === "Christmas") {
      result = "You should look into C#"
    }

    $("#output").text(result);
    $("#output").show();
  });
});  