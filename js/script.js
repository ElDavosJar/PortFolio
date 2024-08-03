/* =============== typing effect =============== */
var typed = new Typed(".typing", {
    strings:["","Diseñador Web", "Web Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})
emailjs.init("TAyq7bqNFGXQ4XFEP"); // Reemplaza con tu Public Key de EmailJS
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario de manera tradicional

    // Envía el formulario a través de EmailJS
    emailjs.sendForm('service_kfd4o4s', 'template_0cxmthw', this)
        .then((result) => {
            console.log('Email enviado exitosamente:', result.text);
            alert('Mensaje enviado correctamente.');
        }, (error) => {
            console.log('Error al enviar el email:', error.text);
            alert('Error al enviar el mensaje.');
        });
});
                            