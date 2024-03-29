//check off specified todos by click
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append(
      "<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>"
    );
  }
});

$("#toggle-form").click(function() {
  $("input[type='text']").fadeToggle();
});
