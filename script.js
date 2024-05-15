document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('button[class="comprar"]');
    // console.log(buttons)

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var phoneNumber = '542235313045'; // Reemplaza con tu número de WhatsApp
            var message = encodeURIComponent('Hola Andres, me gustaría comprar '+ this.id); // Puedes personalizar el mensaje si lo deseas
            var url = 'https://wa.me/' + phoneNumber + '?text=' + message;
            
            window.open(url, '_blank');
        });
    });
});