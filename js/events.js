//define functions here

function getIt(){
  $('p').click(alert('Hey!'));
}


function frameIt() {
  $('img').on('load', function() {
      $(this).addClass('tasty')
    });
  }


function pressIt() {
  $('#typing').on('keydown',function(key){
    if (key.which == 71) {
      alert("You pressed letter g.");
    }
  });
}

function submitIt() {
  $('form').on('submit',function () {
    alert('Your form is going to be submitted now.');
  });

}

$(document).ready(function(){
  getIt();
  // call functions here

});
