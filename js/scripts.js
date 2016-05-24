$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#bark-back").prepend("<li>Bark</li>");

    $("ul#bark-back").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#bark").click(function() {
    $("ul#meow-back").prepend("<li>Meow</li>");

    $("ul#meow-back").children("li").first().click(function() {
      $(this).remove();
    });
  });
});
