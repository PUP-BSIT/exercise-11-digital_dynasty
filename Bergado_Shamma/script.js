document.addEventListener("DOMContentLoaded", function () {
  var nameInput = document.getElementById("name");
  var commentTextarea = document.getElementById("textarea_for_comment");
  var commentButton = document.getElementById("comment");

  nameInput.addEventListener("input", checkFormValidity);
  commentTextarea.addEventListener("input", checkFormValidity);

  function checkFormValidity() {
    var nameValue = nameInput.value.trim();
    var commentValue = commentTextarea.value.trim();
    commentButton.disabled = !(nameValue && commentValue);
  }

  checkFormValidity();
});
