document.querySelector('form').addEventListener('submit', function(event) {
    const articulo = document.getElementById('ar').value.trim();
    const peso = document.getElementById('pe').value.trim();
    
    if (articulo === '' || peso === '') {
        alert('Por favor, completa todos los campos antes de enviar el pedido.');
        event.preventDefault();
    } else {
        alert('Pedido enviado con éxito.');
    }
});
