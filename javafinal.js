//  For the images

function bigImg(x) {
  x.style.height = "30rem";
  x.style.width = "50rem";
}

function normalImg(x) {
  x.style.height = "15rem";
  x.style.width = "25rem";
}

// For the Form
$.getJSON("form.json", function(data){
  console.log(data)

$('.first_name').html(data.first_name);
$('.last_name').html(data.last_name);
$('.zip_code').html(data.zip_code);
$('.cell-phone').html(data.cell_phone);
$('.student_id').html(data.student_id);


});
const form  = document.getElementById('reg');

form.addEventListener('submit', (event) => {
});
