const mburger =document.getElementById('mburger');
const options= document.getElementById('navbar');

mburger.addEventListener('click', function() {
  this.classList.toggle('active');
  options.classList.toggle('active');
});