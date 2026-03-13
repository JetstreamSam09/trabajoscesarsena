let productos = [
    { nombre: "Arroz", precio: 3000, cantidad: 2 },
    { nombre: "Leche", precio: 2500, cantidad: 3 },
    { nombre: "Pan", precio: 2000, cantidad: 4 }
];

productos.forEach(producto => {
    let total = producto.precio * producto.cantidad;
    console.log("Producto: " + producto.nombre);
    console.log("Total: " + total);
});