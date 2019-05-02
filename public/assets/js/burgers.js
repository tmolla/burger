// Make sure we wait to attach our handlers until the DOM is fully loaded.\
$(function() {
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    console.log("creating")
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger").val().trim(),
      devoured: 0,
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
      }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".devour-burger").on("click", function(event) {
    console.log("in devour burger")
    var id = $(this).data("id");

    var burgerState = {
      devoured: true
    };
    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: burgerState
    }).then(
      function() {
        console.log("Updated burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
  