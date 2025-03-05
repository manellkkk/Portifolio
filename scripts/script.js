const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        const element = entry.target;
        const delay = index * 0.05 + 's';

        if (entry.isIntersecting) {
            element.classList.add('show');
            element.classList.remove('hidden');
            element.style.transitionDelay = delay;
        } else {
            element.classList.add('hidden');
            element.classList.remove('show');
            element.style.transitionDelay = '0s';
        }
    });
});

const elements = document.querySelectorAll('.hidden');

elements.forEach((element) => myObserver.observe(element));