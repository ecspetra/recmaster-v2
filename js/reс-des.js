$(function () {
  $(".recmaster-tab__list").on(
    "click",
    ".recmaster-tab__item",
    function (event) {
      $(".recmaster-tab__item", event.delegateTarget).removeClass(
        "recmaster-tab__item--active"
      );
      $(this).addClass("recmaster-tab__item--active");
      $("#recmaster-form > div").each(function () {
        if (!$(this).hasClass("hidden")) {
          $(this).addClass("hidden");
        }
      });
      $("#" + $(this).attr("data")).removeClass("hidden");
    }
  );
});

$(function () {
  $(".recmaster-tab__list").on("click", ".recmaster-tab__final", function () {
    $(".recmaster-tab, .recmaster__title").addClass("hidden-tabs");
  });
});
