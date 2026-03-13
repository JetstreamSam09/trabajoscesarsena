function consultarUsuario() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve({
                id: 1,
                nombre: "Carlos",
                activo: true
            });
        }, 2000);

    });
}

consultarUsuario().then(usuario => {
    console.log("Resultado usando .then():");
    console.log(usuario);
});

async function obtenerUsuario() {
    let usuario = await consultarUsuario();
    console.log("Resultado usando async/await:");
    console.log(usuario);
}

obtenerUsuario();