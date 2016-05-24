$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#bark-back").prepend("<li>Bark</li>");
  });

  $("button#bark").click(function() {
    $("ul#meow-back").prepend("<li>Meow</li>");
  });
});
