const ruta = require("path").resolve(__dirname, "comprueba-que");
const Comprueba = require(ruta);

Comprueba.que(800, "ochocientos", "El número SÍ debe ser igual que ochocientos").es_igual_que(800);

try {
    Comprueba.que(800, "ochocientos", "El número NO debe ser igual que ochocientos").no_es_igual_que(800);
} catch(error) {
    Comprueba.que(error.message).es_igual_que("Comprueba que «ochocientos» no es igual que «800» [error: El número NO debe ser igual que ochocientos]");
}