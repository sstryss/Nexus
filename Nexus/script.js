window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const faq = item.parentNode;
        faq.classList.toggle('open');
    });
});

document.querySelectorAll('.product').forEach(product => {
    product.addEventListener('click', function () {
        const url = this.getAttribute('href');
        if (url) {
            window.location.href = url; 
        }
    });
});



