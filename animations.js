document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animated-element');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, {
        threshold: 0.2 // Triggers when 20% of the element is visible
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});