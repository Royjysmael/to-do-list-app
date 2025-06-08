$(document).ready(function () {
  // Add new item //
  $("#button").click(function () {
    let toAdd = $("#input").val().trim();

    if (toAdd !== "") {
      $("#list").append("<li>" + toAdd + ' <span class="delete">X</span></li>');
      $("#input").val("");
    }
  });

  // Cross out item on double-click //
  $("#list").on("dblclick", "li", function () {
    $(this).toggleClass("strike");
  });

  // Delete item on X click //
  $("#list").on("click", ".delete", function () {
    $(this)
      .parent()
      .fadeOut(300, function () {
        $(this).remove();
      });
  });
  // Enable drag-and-drop sorting //
  $("#list").sortable();
});
