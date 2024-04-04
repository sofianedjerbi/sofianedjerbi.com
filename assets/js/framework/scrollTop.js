document.addEventListener('DOMContentLoaded', () => {
    (() => {
        const scrollTopButton = document.querySelector('.js-scroll-top');
        if (scrollTopButton) {
            function scrollToTop() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }

            scrollTopButton.addEventListener('click', scrollToTop);

            document.addEventListener('scroll', () => {
                const scrollpos = window.scrollY;
                if (scrollpos > 100) {
                  scrollTopButton.classList.add('show');
                } else {
                  scrollTopButton.classList.remove('show');
                }
            });
        }
    })();
});
