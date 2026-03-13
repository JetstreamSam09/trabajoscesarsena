const pedidos = [
    { producto: "Pan", precio: 2000, cantidad: 2 },
    { producto: "Queso", precio: 5000, cantidad: 1 },
    { producto: "Café", precio: 3000, cantidad: 4 }
];

function procesarPedidos(listaPedidos) {
    return new Promise((resolve, reject) => {

        let totalGeneral = 0;

        listaPedidos.forEach(pedido => {
            totalGeneral += pedido.precio * pedido.cantidad;
        });

        resolve(totalGeneral);
    });
}

procesarPedidos(pedidos)
.then(total => {
    console.log("Resultado usando .then()");
    console.log("Total general:", total);
})
.catch(error => {
    console.log("Error:", error);
});


async function calcularTotal() {
    try {
        let total = await procesarPedidos(pedidos);
        console.log("Resultado usando async/await");
        console.log("Total general:", total);
    } catch (error) {
        console.log("Error:", error);
    }
}

calcularTotal();