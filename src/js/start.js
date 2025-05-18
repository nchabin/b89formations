document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const indicatorsContainer = document.getElementById('indicators');

    // Configuration des slides visibles
    let slidesPerView = 3;
    if (window.innerWidth <= 992) {
        slidesPerView = 2;
    }
    if (window.innerWidth <= 768) {
        slidesPerView = 1;
    }

    const totalSlides = slides.length;
    let currentIndex = 0;
    let maxIndex = totalSlides - slidesPerView;

    // Créer les indicateurs
    for (let i = 0; i <= maxIndex; i++) {
        const indicator = document.createElement('button');
        indicator.classList.add('indicator');
        if (i === 0) indicator.classList.add('active');
        indicator.dataset.index = i;
        indicator.addEventListener('click', () => {
            goToSlide(i);
        });
        indicatorsContainer.appendChild(indicator);
    }

    function updateIndicators() {
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((ind, index) => {
            if (index === currentIndex) {
                ind.classList.add('active');
            } else {
                ind.classList.remove('active');
            }
        });
    }

    function getSlideWidth() {
        return slides[0].offsetWidth;
    }

    // Mettre à jour la position des slides
    function goToSlide(index) {
        currentIndex = index;
        const slideWidth = getSlideWidth();
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        updateIndicators();
    }

    // Naviguer vers la droite
    nextButton.addEventListener('click', () => {
        if (currentIndex >= maxIndex) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        goToSlide(currentIndex);
    });

    // Naviguer vers la gauche
    prevButton.addEventListener('click', () => {
        if (currentIndex <= 0) {
            currentIndex = maxIndex;
        } else {
            currentIndex--;
        }
        goToSlide(currentIndex);
    });

    // Ajustement responsive
    window.addEventListener('resize', () => {
        // Déterminer le nombre de slides visibles
        let newSlidesPerView = 3;
        if (window.innerWidth <= 992) {
            newSlidesPerView = 2;
        }
        if (window.innerWidth <= 768) {
            newSlidesPerView = 1;
        }

        // Mettre à jour si nécessaire
        if (newSlidesPerView !== slidesPerView) {
            slidesPerView = newSlidesPerView;
            maxIndex = totalSlides - slidesPerView;

            // Recréer les indicateurs
            indicatorsContainer.innerHTML = '';
            for (let i = 0; i <= maxIndex; i++) {
                const indicator = document.createElement('button');
                indicator.classList.add('indicator');
                if (i === currentIndex) indicator.classList.add('active');
                indicator.dataset.index = i;
                indicator.addEventListener('click', () => {
                    goToSlide(i);
                });
                indicatorsContainer.appendChild(indicator);
            }

            // S'assurer que currentIndex est valide
            if (currentIndex > maxIndex) {
                currentIndex = maxIndex;
            }
        }

        // Recalculer les dimensions et actualiser la position
        setTimeout(() => {
            goToSlide(currentIndex);
        }, 100);
    });

    // Initialiser
    goToSlide(0);

    // Auto-play
    let autoplayInterval;

    function startAutoplay() {
        autoplayInterval = setInterval(() => {
            if (currentIndex >= maxIndex) {
                currentIndex = 0;
            } else {
                currentIndex++;
            }
            goToSlide(currentIndex);
        }, 5000);
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }

    // Démarrer l'autoplay
    startAutoplay();

    // Arrêter l'autoplay au survol
    track.addEventListener('mouseenter', stopAutoplay);
    track.addEventListener('mouseleave', startAutoplay);
});