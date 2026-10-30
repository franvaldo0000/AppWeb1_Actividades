// ==========================================
// C) FUNCIONES
// ==========================================

// --- 1. Funciones de declaración ---

// A) Sin retorno de valor
// 1. Función saludar
function saludar() {
    console.log("¡Hola, bienvenido!");
}
saludar(); // Prueba de la función

// 2. Función saludarPersona con template strings
function saludarPersona(nombre) {
    console.log(`¡Hola ${nombre}, bienvenido!`);
}
saludarPersona("Francisco"); // Prueba de la función


// B) Retorno de valor
// Función esMayorDeEdad que retorna true o false
function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}

// Guardar el valor retornado en una variable
let esMayor = esMayorDeEdad(20);
console.log("B) ¿Es mayor de edad?", esMayor);


// --- 2. Funciones de flecha (Arrow Functions) ---

// 1. Mismo programa de esMayorDeEdad convertido a función flecha
const esMayorDeEdadFlecha = (edad) => {
    return edad >= 18;
};
let esMayorFlechaRes = esMayorDeEdadFlecha(16);
console.log("Flecha 1: ¿Es mayor de edad?", esMayorFlechaRes);


// 2. Función flecha que compara dos números e imprime el resultado
const compararNumeros = (parametro1, parametro2) => {
    if (parametro1 < parametro2) {
        console.log(`El número ${parametro1} es menor que ${parametro2}`);
    } else if (parametro1 === parametro2) {
        console.log(`El número ${parametro1} es igual que ${parametro2}`);
    } else {
        console.log(`El número ${parametro1} es mayor que ${parametro2}`);
    }
};


// 3. Utilizar la función dentro de un bucle (pasando el iterador y un número fijo)
console.log("--- Bucle con función flecha de comparación ---");
let numeroFijo = 5;
for (let i = 1; i <= 10; i++) {
    compararNumeros(i, numeroFijo);
}


// --- 3. Funciones Callback ---

// Funciones para usar como callback (suma y resta)
const suma = (num1, num2) => {
    let resultado = num1 + num2;
    console.log(`El resultado de la suma es ${resultado}`);
};

const resta = (num1, num2) => {
    let resultado = num1 - num2;
    console.log(`El resultado de la resta es ${resultado}`);
};

// Función principal 'operacion' con validación de tipo de datos
const operacion = (num1, num2, callback) => {
    // Validamos que ambos argumentos sean estrictamente de tipo número
    if (typeof num1 !== "number" || typeof num2 !== "number" || isNaN(num1) || isNaN(num2)) {
        console.log("Debe ingresar solo números.");
    } else {
        // Ejecutamos la función callback pasada como parámetro
        callback(num1, num2);
    }
};

// Pruebas de funcionamiento de los callbacks
console.log("--- Pruebas de Callbacks ---");
operacion(12, 4, suma);   // Prueba correcta de suma
operacion(12, 4, resta);  // Prueba correcta de resta
operacion("12", 4, suma); // Prueba con error (string en vez de número)