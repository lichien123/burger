
$( document ).ready(function() {
    console.log( "ready!" );

  $("#order-burger").on('click', function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log('hi');
    var newBurger = {
      burger_name: $('#burger-input').val().trim(),
      devoured: false
    };
    console.log(newBurger.burger_name);
    // Send the POST request.
    $.ajax('/api/burger', {
      type: 'POST',
      data: newBurger
    }).then(
      function() {
        console.log('created new plan');
        location.reload();
      }
    );
  });
    // UPDATE
  $('.eat-burger').on('click', function(event) {

    event.preventDefault();

    var burgerId = $(this).data('burger-id');

    $.ajax('/api/burger/' + burgerId, {
      type: 'PUT'
    }).then(
      function() {
        console.log('updated burger');

        location.reload();
      }
    );
  });

  // DELETE
  $('.remove-burger').on('click', function(event) {

    event.preventDefault();

    var burgerId = $(this).data('burger-id');

    $.ajax('/api/burger/' + burgerId, {
      type: 'DELETE'
    }).then(
      function() {
        console.log('updated burger');

        location.reload();
      }
    );
  });
});

