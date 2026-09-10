document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // MENU MOBILE
    // ==========================================

    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            alert('Menu Mobile - Implementar navegação lateral aqui.');
        });
    }


    // ==========================================
    // CARROSSEL DO ESTOQUE
    // ==========================================

    const track = document.querySelector('.inventory-track');
    const cards = document.querySelectorAll('.car-card');

    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');

    const indicators = document.querySelectorAll(
        '.carousel-indicators span'
    );

    let currentIndex = 0;


    // Só executa o carrossel se os elementos existirem
    if (
        track &&
        cards.length > 0 &&
        prevButton &&
        nextButton
    ) {

        // ------------------------------------------
        // MOSTRAR CARRO
        // ------------------------------------------

        function showCar(index) {

            // Volta para o último carro
            if (index < 0) {
                index = cards.length - 1;
            }

            // Volta para o primeiro carro
            if (index >= cards.length) {
                index = 0;
            }

            currentIndex = index;


            // Move o carrossel
            track.style.transform =
                `translateX(-${currentIndex * 100}%)`;


            // Atualiza as bolinhas
            indicators.forEach((indicator, i) => {

                indicator.classList.toggle(
                    'active',
                    i === currentIndex
                );

            });

        }


        // ------------------------------------------
        // BOTÃO PRÓXIMO
        // ------------------------------------------

        nextButton.addEventListener('click', () => {

            showCar(currentIndex + 1);

        });


        // ------------------------------------------
        // BOTÃO ANTERIOR
        // ------------------------------------------

        prevButton.addEventListener('click', () => {

            showCar(currentIndex - 1);

        });


        // ------------------------------------------
        // BOLINHAS
        // ------------------------------------------

        indicators.forEach((indicator, index) => {

            indicator.addEventListener('click', () => {

                showCar(index);

            });

        });


        // ------------------------------------------
        // ARRASTAR NO CELULAR
        // ------------------------------------------

        let startX = 0;
        let endX = 0;


        track.addEventListener('touchstart', (event) => {

            startX = event.touches[0].clientX;

        });


        track.addEventListener('touchend', (event) => {

            endX = event.changedTouches[0].clientX;

            const difference = startX - endX;


            // Só troca se arrastar uma distância
            // significativa
            if (Math.abs(difference) > 50) {

                if (difference > 0) {

                    // Arrastou para a esquerda
                    showCar(currentIndex + 1);

                } else {

                    // Arrastou para a direita
                    showCar(currentIndex - 1);

                }

            }

        });


        // ------------------------------------------
        // INICIA NO PRIMEIRO CARRO
        // ------------------------------------------

        showCar(0);

    }


    // ==========================================
    // FORMULÁRIO PARA WHATSAPP
    // ==========================================

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {

        contactForm.addEventListener('submit', (e) => {

            e.preventDefault();


            const name =
                document.getElementById('name').value;

            const carModel =
                document.getElementById('carModel').value;

            const message =
                document.getElementById('message').value;


            // Número da Garagem Multimarcas
            // Substitua pelo número real
            const phoneNumber = "5519997042755";


            const text =
                `OLÁ GARAGEM MULTIMARCAS!%0A%0A` +
                `*NOME:* ${name}%0A` +
                `*VEÍCULO DE INTERESSE:* ${carModel}%0A` +
                `*MENSAGEM:* ${message}`;


            const whatsappUrl =
                `https://wa.me/${phoneNumber}?text=${text}`;


            window.open(
                whatsappUrl,
                '_blank'
            );


            contactForm.reset();

        });

    }


    // ==========================================
    // HEADER SCROLL EFFECT
    // ==========================================

    const header = document.querySelector('header');

    if (header) {

        window.addEventListener('scroll', () => {

            if (window.scrollY > 50) {

                header.style.padding = '10px 0';

            } else {

                header.style.padding = '15px 0';

            }

        });

    }

});