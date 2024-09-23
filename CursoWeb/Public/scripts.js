// Función para copiar el correo al portapapeles
function copyEmail() {
    navigator.clipboard.writeText('chavira.kaleb@inventec.com').then(function() {
        // Mostrar modal para enviar correo
        document.getElementById('emailModal').style.display = 'block';
    }, function(err) {
        console.error('Error al copiar el correo: ', err);
    });
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById('emailModal').style.display = 'none';
}

// Función para enviar correo usando Outlook (solo si Outlook está configurado en el sistema)
function sendEmail() {
    window.location.href = 'mailto:chavira.kaleb@inventec.com';
}

// Función para abrir WhatsApp Web o la app de WhatsApp con un mensaje predeterminado
function openWhatsApp() {
    var phone = "+526567059662";
    var message = "Hola Kaleb, soy [Tu Nombre]. Me gustaría reservarte un tiempo para aclarar dudas sobre el curso web.";
    var encodedMessage = encodeURIComponent(message);
    var url = "https://wa.me/" + phone + "?text=" + encodedMessage;
    window.open(url, '_blank');
}

// Mostrar el botón cuando se desplace hacia abajo
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('scrollToTopBtn').classList.add('show'); // Añadir clase para mostrar
    } else {
        document.getElementById('scrollToTopBtn').classList.remove('show'); // Quitar clase para ocultar
    }
};

// Función para volver al tope de la página
document.getElementById('scrollToTopBtn').onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
