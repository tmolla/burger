// Make sure we wait to attach our handlers until the DOM is fully loaded.\
$(function() {
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
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
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".devour-burger").on("click", function(event) {
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
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});