// ==========================================
// A) ESTRUCTURAS DE CONTROL: CONDICIONALES
// ==========================================

// 1. Verificar si la variable edad es mayor o menor de edad
let edad = 20; // Puedes cambiar este valor para probar

if (edad >= 18) {
    console.log("Condicional 1: Es mayor de edad");
} else {
    console.log("Condicional 1: Es menor de edad");
}


// 2. Verificar si un número es par o impar
let numero = 7; // Puedes cambiar este valor para probar

if (numero % 2 === 0) {
    console.log("Condicional 2: El número es par");
} else {
    console.log("Condicional 2: El número es impar");
}


// 3. Comprobar la variable nota según criterios
let nota = 8; // Puedes cambiar este valor para probar

if (nota < 4) {
    console.log("Condicional 3: Reprobado");
} else if (nota >= 4 && nota <= 7) {
    console.log("Condicional 3: Aprobado");
} else {
    console.log("Condicional 3: Excelente");
}


// ==========================================
// B) ESTRUCTURAS DE CONTROL: BUCLES (FOR)
// ==========================================

// 1. Imprimir los números del 1 al 10
console.log("--- Bucle 1: Números del 1 al 10 ---");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// 2. Imprimir los números del 10 al 1 en orden descendente
console.log("--- Bucle 2: Números del 10 al 1 (Descendente) ---");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// 3. 20 iteraciones combinadas con condicionales para par o impar
console.log("--- Bucle 3: 20 iteraciones (Par / Impar básico) ---");
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}


// 4. Modificación del punto anterior usando Template Literals
console.log("--- Bucle 4: 20 iteraciones con Template Literals ---");
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log(`El número ${i} es par`);
    } else {
        console.log(`El número ${i} es impar`);
    }
}