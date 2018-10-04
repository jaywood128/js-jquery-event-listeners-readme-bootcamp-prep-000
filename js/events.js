function getIt() {
  $('p').on("click", function() {
    alert("Hey!")
 })
}
function frameIt() {
  $('img').on ("load", function() {
    $('img').addClass('tasty')

  })
}
function submitIt() {
  $('form').on("submit", function() {
  if ($("input:first").val() === "correct") {
    alert('Your form is going to be submitted now.')
      return
  }
})//define functions here
$(document).ready(function(){

 // getIt();// call functions here
  frameIt();
  // submitIt();
});
