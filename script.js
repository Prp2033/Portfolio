emailjs.init("cmHddCIDfE68uOuqD");

document.getElementById('contact_form').addEventListener('submit', function(event) {
  event.preventDefault();
  emailjs.sendForm('service_26oq4xa', 'template_33ufqkh', this)
    .then(function() {
    document.querySelector('.contact_form').reset();
    var msg = document.getElementById('success_message');
    msg.classList.add('show');
    setTimeout(function() {
        msg.classList.remove('show');
    }, 4000);
}, function(error) {
    console.error("Échec de l'envoi:", error);
    alert('Échec de l\'envoi, veuillez réessayer.');
});
});   

var shareWrapper = document.querySelector('.wrapperShare');
if (shareWrapper) {
  shareWrapper.addEventListener('click', function (event) {
    event.stopPropagation();
    shareWrapper.classList.toggle('active');
  });
  document.addEventListener('click', function () {
    shareWrapper.classList.remove('active');
  });
}