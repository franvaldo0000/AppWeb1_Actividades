// ==========================================
// A) ARREGLOS
// ==========================================

// 1 y 1.2 - Solicitar 5 números por prompt y guardar solo los impares en un arreglo
let numerosImpares = [];

for (let i = 0; i < 5; i++) {
    // Solicitamos el número y lo convertimos a número entero
    let ingreso = Number(prompt(`Ingrese el número ${i + 1} de 5:`));
    
    // Verificamos si es impar antes de hacer push
    if (ingreso % 2 !== 0) {
        numerosImpares.push(ingreso);
    }
}
console.log("A1.2 Arreglo de números impares ingresados:", numerosImpares);


// 1.3 - Arreglo de frutas y uso de forEach() para convertir a MAYÚSCULAS
let frutas = ["pera", "manzana", "banana", "durazno"];

frutas.forEach((fruta, indice, arr) => {
    // Como los strings son primitivos, actualizamos el valor en su índice original
    arr[indice] = fruta.toUpperCase();
});
console.log("A1.3 Frutas en MAYÚSCULAS (forEach):", frutas);


// 1.4 - Uso del método no destructivo map() para crear un nuevo arreglo en mayúsculas
let frutasOriginales = ["pera", "manzana", "banana", "durazno"];
let frutasMayusculas = frutasOriginales.map(fruta => fruta.toUpperCase());
console.log("A1.4 Nuevo arreglo con map():", frutasMayusculas);


// 1.5 - Uso del método no destructivo filter() y includes() para filtrar por "na"
let frutasConNa = frutasOriginales.filter(fruta => fruta.includes("na"));
console.log("A1.5 Frutas que contienen 'na' (filter):", frutasConNa);


// ==========================================
// B) OBJETOS
// ==========================================

// 1. Objeto individual con datos ficticios de un producto de indumentaria
let productoIndumentaria = {
    nombre: "Remera Básica",
    precio: 15000,
    stock: 8,
    talles: ["s", "m", "l"]
};


// 2. Arreglo de 4 objetos de indumentaria con variedad de stock
let productos = [
    { nombre: "Remera Básica", precio: 15000, stock: 3, talles: ["s", "m", "l"] },
    { nombre: "Pantalón Jean", precio: 35000, stock: 12, talles: ["m", "l", "xl"] },
    { nombre: "Buzo Oversize", precio: 45000, stock: 4, talles: ["s", "m"] },
    { nombre: "Campera de Cuero", precio: 80000, stock: 15, talles: ["m", "l"] }
];


// 3. Recorrer con forEach() e imprimir solo los que tienen stock menor a 5
console.log("--- B3. Productos con stock menor a 5 ---");
productos.forEach(producto => {
    if (producto.stock < 5) {
        console.log(`Producto: ${producto.nombre} | Stock: ${producto.stock}`);
    }
});


// 4 y 5. Reutilizar el arreglo y usar map() para aplicar un 10% de descuento e imprimirlo
let productosConDescuento = productos.map(producto => {
    return {
        ...producto, // Copiamos las propiedades existentes
        precio: producto.precio * 0.9 // Aplicamos 10% de descuento (reducimos al 90%)
    };
});
console.log("--- B4 y B5. Productos con 10% de descuento (map) ---", productosConDescuento);


// 6 y 7. Reutilizar el arreglo y usar filter() para productos con stock mayor a 10 e imprimirlo
let productosStockAlto = productos.filter(producto => producto.stock > 10);
console.log("--- B6 y B7. Productos con stock mayor a 10 (filter) ---", productosStockAlto);