$(function () {
  console.log("ready!");
 
//when the user clicks on our button
 $('#sender').on('click', function (e) {
e.preventDefault();
var getInput = $('#textInput').val(); 
   
//send the text over and output it on the other column
$('#textOutput').append('<p>'+getInput+'</p>');
   
//wipes the box so it can take more input
$('#textInput').val(''); 
});
});

//If we hit enter then the same thing will happen

$('#textInput').keypress(function (e) {
  if (e.which == 13) {
    var getInput = $('#textInput').val(); 
    $('#textOutput').append('<p>'+getInput+'</p>'); 
    $('#textInput').val('');
    return false; 
  }
});

//when the user clicks the wipe out buton
$('#wipe').on('click', function (e) {
  e.preventDefault();
  //wipes our output column
  $('#textOutput').text(''); 
  //wipes input box
  $('#textInput').val('');
});
