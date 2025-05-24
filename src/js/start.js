document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const indicatorsContainer = document.getElementById('indicators');
    
    let currentIndex = 0;
    let slidesToShow = getSlidesToShow();
    let slideWidth = getSlideWidth();
    
    // Initialiser le carrousel
    function initCarousel() {
        // Créer les indicateurs
        createIndicators();
        
        // Positionner initialement les slides
        updateCarousel();
        
        // Écouter les événements de redimensionnement
        window.addEventListener('resize', handleResize);
        
        // Écouter les clics sur les boutons
        nextButton.addEventListener('click', moveNext);
        prevButton.addEventListener('click', movePrev);
        
        // Mise à jour de l'état des boutons
        updateButtonStates();
    }
    
    // Créer les indicateurs de pagination
    function createIndicators() {
        indicatorsContainer.innerHTML = '';
        const totalGroups = Math.ceil(slides.length / slidesToShow);
        
        for (let i = 0; i < totalGroups; i++) {
            const button = document.createElement('button');
            button.setAttribute('aria-label', `Groupe de slides ${i + 1}`);
            button.addEventListener('click', () => goToSlide(i * slidesToShow));
            indicatorsContainer.appendChild(button);
        }
        
        updateIndicators();
    }
    
    // Obtenir le nombre de slides à afficher selon la taille d'écran
    function getSlidesToShow() {
        const windowWidth = window.innerWidth;
        if (windowWidth >= 1200) return 3;
        if (windowWidth >= 768) return 2;
        return 1;
    }
    
    // Obtenir la largeur d'un slide
    function getSlideWidth() {
        if (slides.length === 0) return 0;
        
        // Obtenir la largeur du conteneur
        const containerWidth = track.parentElement.offsetWidth;
        
        // Calculer la largeur basée sur le nombre de slides visibles
        const gap = 20; // Espacement entre les slides
        const slideWidth = (containerWidth - (gap * (slidesToShow - 1))) / slidesToShow;
        
        return slideWidth;
    }
    
    // Gérer le redimensionnement de fenêtre
    function handleResize() {
        const newSlidesToShow = getSlidesToShow();
        
        // Si le nombre de slides visibles a changé
        if (newSlidesToShow !== slidesToShow) {
            slidesToShow = newSlidesToShow;
            slideWidth = getSlideWidth();
            
            // Recréer les indicateurs
            createIndicators();
            
            // Ajuster l'index courant si nécessaire
            const maxIndex = slides.length - slidesToShow;
            if (currentIndex > maxIndex) {
                currentIndex = maxIndex;
            }
            
            // Mettre à jour l'affichage
            updateCarousel();
        } else {
            // Recalculer juste la largeur des slides
            slideWidth = getSlideWidth();
            updateCarousel();
        }
    }
    
    // Mise à jour de l'affichage du carrousel
    function updateCarousel() {
        // Ajuster la largeur de chaque slide
        slides.forEach(slide => {
            slide.style.width = `${slideWidth}px`;
        });
        
        // Transformer le track pour déplacer les slides
        const gap = 20;
        const moveDistance = currentIndex * (slideWidth + gap);
        track.style.transform = `translateX(-${moveDistance}px)`;
        
        // Mettre à jour les indicateurs
        updateIndicators();
        
        // Mettre à jour l'état des boutons
        updateButtonStates();
    }
    
    // Mise à jour des indicateurs
    function updateIndicators() {
        const indicators = Array.from(indicatorsContainer.children);
        const activeGroupIndex = Math.floor(currentIndex / slidesToShow);
        
        indicators.forEach((indicator, index) => {
            if (index === activeGroupIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    // Mise à jour de l'état des boutons (actif/inactif)
    function updateButtonStates() {
        const maxIndex = slides.length - slidesToShow;
        
        if (currentIndex <= 0) {
            prevButton.setAttribute('disabled', 'true');
            prevButton.style.opacity = '0.5';
            prevButton.style.cursor = 'not-allowed';
        } else {
            prevButton.removeAttribute('disabled');
            prevButton.style.opacity = '1';
            prevButton.style.cursor = 'pointer';
        }
        
        if (currentIndex >= maxIndex) {
            nextButton.setAttribute('disabled', 'true');
            nextButton.style.opacity = '0.5';
            nextButton.style.cursor = 'not-allowed';
        } else {
            nextButton.removeAttribute('disabled');
            nextButton.style.opacity = '1';
            nextButton.style.cursor = 'pointer';
        }
    }
    
    // Aller à un slide spécifique
    function goToSlide(index) {
        const maxIndex = slides.length - slidesToShow;
        currentIndex = Math.max(0, Math.min(index, maxIndex));
        updateCarousel();
    }
    
    // Passer au groupe de slides suivant
    function moveNext() {
        goToSlide(currentIndex + slidesToShow);
    }
    
    // Passer au groupe de slides précédent
    function movePrev() {
        goToSlide(currentIndex - slidesToShow);
    }
    
    // Support des contrôles tactiles (swipe)
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});
    
    track.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});
    
    function handleSwipe() {
        const swipeThreshold = 75; // Distance minimum pour considérer un swipe
        
        if (touchEndX - touchStartX > swipeThreshold) {
            // Swipe vers la droite (précédent)
            movePrev();
        } else if (touchStartX - touchEndX > swipeThreshold) {
            // Swipe vers la gauche (suivant)
            moveNext();
        }
    }
    
    // Initialiser le carrousel au chargement
    initCarousel();
});