$(function () {
  console.log("ready!");
 
//if the user clicks on the send button
 $('#sender').on('click', function (e) {
e.preventDefault();
var getInput = $('#textInput').val(); 
//outputs the text onto the other column
$('#textOutput').append('<p>'+getInput+'</p>');
//clears the input box
$('#textInput').val(''); 
});
});

//if the user hits 'enter', same thing as above
$('#textInput').keypress(function (e) {
  if (e.which == 13) {
    var getInput = $('#textInput').val(); 
    $('#textOutput').append('<p>'+getInput+'</p>'); 
    $('#textInput').val('');
    return false; 
  }
});

//if the user clicks the clear button
$('#clear').on('click', function (e) {
  e.preventDefault();
  //clear output column
  $('#textOutput').text(''); 
  //clear input box
  $('#textInput').val('');
});
