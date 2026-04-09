// Rolagem suave para os links internos da navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Ação de simulação para ler trecho
document.getElementById('btn-trecho').addEventListener('click', () => {
    alert('Aqui você pode abrir um Modal (pop-up) com o primeiro capítulo, ou redirecionar para um PDF!');
});

// Interceptando o formulário de contato
document.getElementById('formContato').addEventListener('submit', function(e) {
    e.preventDefault();
    // Aqui você faria a integração com uma API ou serviço de email (como EmailJS ou Formspree)
    alert('Obrigado pela mensagem! Entrarei em contato em breve.');
    this.reset();
});