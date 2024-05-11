document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('button[id^="comprar"]');
    
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var phoneNumber = '542235313045'; // Reemplaza con tu número de WhatsApp
            var message = encodeURIComponent('Hola, me gustaría comprar este producto.'); // Puedes personalizar el mensaje si lo deseas
            var url = 'https://wa.me/' + phoneNumber + '?text=' + message;
            
            window.open(url, '_blank');
        });
    });
});