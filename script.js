document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos que devem ter o efeito de fade/reveal
    const revealElements = document.querySelectorAll('.reveal');

    // Opções do Intersection Observer
    const observerOptions = {
        root: null, // viewport (área visível do navegador)
        rootMargin: '0px',
        threshold: 0.1 // 10% do elemento precisa estar visível para disparar
    };

    // Callback executado quando um elemento monitorado cruza o limite
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Se o elemento está visível na tela
            if (entry.isIntersecting) {
                // Adiciona a classe 'active' para iniciar a transição CSS (fade-in)
                entry.target.classList.add('active');
                
                // Opcional: Para fazer o efeito uma única vez, remova o observador
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Começa a observar cada elemento
    revealElements.forEach(element => {
        observer.observe(element);
    });
});