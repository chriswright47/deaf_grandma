$(document).ready(function() {
  // alert("foo");
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them
  $("form").submit(function(event) {
    event.preventDefault();

    var data = $(this).serialize();
    
    $.post("/", data, function (response) {
   
      $(".result").html("Oli says " + response);
    });

  });
  
  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});
// function myFunction() {
//     alert("Hello World!");
//   }
