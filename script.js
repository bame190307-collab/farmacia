
let inventario = {}; 
let ventasTotales = 0;


function registrar() {
    let nombre = prompt("Nombre del medicamento:");
    let cantidad = prompt("¿Cuántos hay?");
    let precio = prompt("¿Cuánto cuesta cada uno?");


    inventario[nombre] = {
        stock: Number(cantidad),
        costo: Number(precio)
    };
    console.log("Guardado: " + nombre);
}

function consultar() {
    console.log("--- LISTA DE PRODUCTOS ---");
    for (let nombre in inventario) {
        let producto = inventario[nombre];
        console.log(nombre + " | Cantidad: " + producto.stock + " | Precio: $" + producto.costo);
    }
}

function vender() {
    let nombre = prompt("¿Qué medicamento quieres vender?");

    
    if (inventario[nombre]) {
        let cantidadAVender = Number(prompt("¿Cuántos vas a vender?"));

        
        if (inventario[nombre].stock >= cantidadAVender) {
            // Restamos la cantidad del stock
            inventario[nombre].stock = inventario[nombre].stock - cantidadAVender;
            
            
            let dineroVenta = cantidadAVender * inventario[nombre].costo;
            ventasTotales = ventasTotales + dineroVenta;
            
            console.log("Venta exitosa. Cobrar: $" + dineroVenta);
        } else {
            console.log("No hay suficiente producto.");
        }
    } else {
        console.log("Ese medicamento no está registrado.");
    }
}

function verTotal() {
    console.log("Dinero total ganado hoy: $" + ventasTotales);
}


let salir = false;

while (salir == false) {
    let opcion = prompt("1:Registrar, 2:Consultar, 3:Vender, 4:Total, 5:Salir");

    if (opcion == "1") {
        registrar();
    } else if (opcion == "2") {
        consultar();
    } else if (opcion == "3") {
        vender();
    } else if (opcion == "4") {
        verTotal();
    } else if (opcion == "5") {
        salir = true;
        console.log("Programa terminado.");
    }

}
