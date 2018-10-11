$(document).ready(function () {
  var $menu = $("#my-menu").mmenu({
    "extensions": [
      "position-right"
    ]

  }, {
    clone: true
  });
  var API = $menu.data("mmenu");
  $("#menu-button").click(function () {
    API.open();
  });
});