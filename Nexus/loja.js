function filterCategory(category) {
    const products = document.querySelectorAll('.product');
    const buttons = document.querySelectorAll('.category-btn');
    
    
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    
    document.getElementById(`${category}-btn`).classList.add('active');

    
    products.forEach(product => {
        product.classList.remove('visible'); 
        product.style.display = 'none'; 
    });

    
    setTimeout(() => {
        products.forEach(product => {
            if (category === 'all' || product.classList.contains(category)) {
                product.style.display = 'block'; 
                
                
                setTimeout(() => {
                    product.classList.add('visible');
                }, 10); 
            }
        });
    }, 200); 
}
