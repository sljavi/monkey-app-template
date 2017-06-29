$('#welcome button').click(function () {
  $('#welcome').hide();
  $('#take-selfie').show();
});

$('#take-selfie button').click(function () {
  $('#take-selfie').hide();
  $('#selfie-result').show();
});

$('#takeAnother').click(function () {
  $('#selfie-result').hide();
  $('#take-selfie').show();
});

$('#getResult').click(function () {
  $('#selfie-result').hide();
  $('#share').show();
});

$('#takeAnotherFromSharePage').click(function () {
  $('#share').hide();
  $('#take-selfie').show();
});
