(function () {
    function initCarousel(el) {
        const track = el.querySelector('[data-track]');
        if (!track) return;
        const slides = Array.from(track.children);
        if (slides.length === 0) return;

        const prevBtn = el.querySelector('.carousel-prev');
        const nextBtn = el.querySelector('.carousel-next');

        let index = 0;
        const total = slides.length;
        const autoplaySecs = Number.parseInt(el.dataset.autoplay || '0', 10);
        let autoplayTimer = null;

        function update() {
            const offset = -index * 100;
            track.style.transform = `translateX(${offset}%)`;
        }

        function goTo(i) {
            index = (i + total) % total;
            update();
        }

        function next() {
            goTo(index + 1);
        }

        function prev() {
            goTo(index - 1);
        }

        if (nextBtn) nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            next();
            resetAutoplay();
        });
        if (prevBtn) prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            prev();
            resetAutoplay();
        });

        let startX = 0;
        let isDown = false;
        track.addEventListener('pointerdown', (e) => {
            isDown = true;
            startX = e.clientX;
            track.setPointerCapture(e.pointerId);
        });
        track.addEventListener('pointerup', (e) => {
            if (!isDown) return;
            isDown = false;
            const dx = e.clientX - startX;
            if (Math.abs(dx) > 50) {
                if (dx < 0) next(); else prev();
                resetAutoplay();
            }
        });

        function startAutoplay() {
            if (autoplaySecs > 0) {
                autoplayTimer = setInterval(next, autoplaySecs * 1000);
            }
        }

        function resetAutoplay() {
            if (autoplayTimer) {
                clearInterval(autoplayTimer);
            }
            startAutoplay();
        }

        startAutoplay();

        update();

        el.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                next();
                resetAutoplay();
            }
            if (e.key === 'ArrowLeft') {
                prev();
                resetAutoplay();
            }
        });
    }

    function initAll() {
        document.querySelectorAll('.js-carousel').forEach(initCarousel);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAll);
    } else {
        initAll();
    }
})();
