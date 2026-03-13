function procesarPedido(pedido) {
    return new Promise((resolve, reject) => {

        if (pedido.cantidad > 0) {
            let total = pedido.precio * pedido.cantidad;
            resolve(total);
        } else {
            reject("Cantidad invalida. El pedido no se puede procesar.");
        }

    });
}

let pedido = {
    producto: "Arroz",
    precio: 3000,
    cantidad: 2
};

procesarPedido(pedido)
.then(total => {
    console.log("Resultado usando .then()");
    console.log("Total del pedido:", total);
})
.catch(error => {
    console.log("Error:", error);
});

async function ejecutarPedido() {
    try {
        let total = await procesarPedido(pedido);
        console.log("Resultado usando async/await");
        console.log("Total del pedido:", total);
    } catch (error) {
        console.log("Error:", error);
    }
}

ejecutarPedido();