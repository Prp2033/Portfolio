emailjs.init("cmHddCIDfE68uOuqD");

document.getElementById('contact_form').addEventListener('submit', function(event) {
  event.preventDefault();
  emailjs.sendForm('service_26oq4xa', 'template_33ufqkh', this)
    .then(function() {
      alert('Message envoyé avec succès !');
      document.querySelector('.contact_form').reset();
    }, function(error) {
      console.error("Échec de l'envoi:", error);
      alert('Échec de l\'envoi, veuillez réessayer.');
    });
});   