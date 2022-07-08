alert("Aprende las tablas del numero que quieras!!");

let numero = prompt("Ingresa un numero");
numero = parseInt(numero);

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    alert(numero + " x " + i + " = " + resultado);
}

alert("Adivina el acertijo:");

let entrada = prompt("Voy construyendo mis redes entre ramas y en rincones para que caigan en ellas las moscas incautas. ¿Que soy?");
while (entrada != "araña") {
    switch (entrada) {
        default:
            alert("Incorrecto :(");
            break;
    }
    entrada = prompt("Voy construyendo mis redes entre ramas y en rincones para que caigan en ellas las moscas incautas. ¿Que soy?");
}