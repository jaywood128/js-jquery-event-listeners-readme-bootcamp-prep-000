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
// function submit() {
//   $('form').on("submit", function() {
//   if ($("input:first").val() ==="correct") {
//     alert('your form is going to be submitted now')
//     return;
//   }
//     alert("you entered the wrong value")
//     return;
//
// })//define functions here
$(document).ready(function(){

 //getIt();// call functions here
  frameIt();

});
