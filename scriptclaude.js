emailjs.init("cmHddCIDfE68uOuqD");

document.getElementById('contact_form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Renseigne la date et l'heure d'envoi pour la variable {{time}} de la template
  var now = new Date();
  document.getElementById('time').value = now.toLocaleString('fr-FR', {
    dateStyle: 'long',
    timeStyle: 'short'
  });

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

// Menu de partage : ouverture/fermeture au clic (fonctionne aussi au tactile sur mobile)
var shareWrapper = document.querySelector('.wrapperShare');

if (shareWrapper) {
  shareWrapper.addEventListener('click', function (event) {
    // Empêche ce clic d'être aussi compté comme un "clic à l'extérieur"
    event.stopPropagation();
    shareWrapper.classList.toggle('active');
  });

  // Un clic n'importe où ailleurs sur la page referme le menu
  document.addEventListener('click', function () {
    shareWrapper.classList.remove('active');
  });
}