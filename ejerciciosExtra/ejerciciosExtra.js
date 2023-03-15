/*EJERCICIOS EXTRA ARRAYS */


// 1º Dado el siguiente array mostrar sus datos de 0 al valor final 
// del array con los bucles dados en clase (while,
// do while, for...)
console.log("1------------------")

var js = [25, 2.05, 1000, 63, 4.01, -9];

for(i = 0; i < js.length; i++) {
    console.log(js[i]);
}
console.log("------------------")
for (variables in js) {
    console.log(js[variables]);
    
}
console.log("------------------")

for (variables of js) {
    console.log(variables);
}
console.log("------------------")

var i = 0;

while (i < js.length) {
    console.log(js[i]);
    i++;
}
console.log("------------------")

j = 0;
do {
    console.log(js[j]);
    j++;
} while (j < js.length);

console.log("2------------------")

// 2º Dado el siguiente array de números, mostrar aquellos que sean mayores a 0

var jf = [14, 2, 2.02, 63, 0, -9];


for (variables in jf) {
    if (jf[variables] > 0) {
        console.log(jf[variables]);
    }
}
console.log("3------------------")

// 3º Dado el array del ejercicio anterior separa ahora en un array los números mayores o iguales a 0, y en otro
// los que sean menores que 0, y mostrar los arrays con los resultados.

var jd = [14, 2, 2.02, 63, 0, -9];

numerosMayores0 = [];
numerosMenores0 = [];

for (i = 0; i < jd.length; i++) {
    if (jd[i] > 0) {
        numerosMayores0.push(jd[i]);
    } else {
        numerosMenores0.push(jd[i]);
    }
}
console.log(numerosMayores0);
console.log(numerosMenores0);



console.log("4------------------")

//4 º Dado el array del ejercicio anterior, borra del array ORIGINAL, los que sean menores a 0 y muestra el array
// resutante. Pista: Utiliza el método splice usado en clase.



ja =  [14, 2, 2.02, 63, 0, -9]

for (i = 0; i < ja.length; i++) {
    if (ja[i] < 0) {
        ja.splice(i, 1,);
        console.log(ja);
    }
}



console.log("5------------------")

// 5º Dado el siguiente array de objetos muestra en sentido inverso (del valor final al valor inicial).

jg = [ 
    { id: 1, name: "Jhon",}, 
    { id: 2, name: "Doe",}, 
    { id: 3, name: "Clara",}, 
    { id: 4, name: "Elisa",}, 
    { id: 4, name: "Pedro",}, 
]

jgInverso = jg.reverse();

console.log(jgInverso);

console.log("6------------------")


// 6º Dado el siguiente array de objetos, mostrar solo aquellos que tengan una edad mayor o igual a 18.

jh = [ 
    { id: 1, name: "Jhon", age: 25,}, 
    { id: 2, name: "Doe", age: 8,}, 
    { id: 3, name: "Clara", age: 15,}, 
    { id: 4, name: "Elisa", age: 30,},
    { id: 4, name: "Pedro", age: 18, }, 
]

for (var i = 0; i <  jh.length; i++) {
    if(jh[i].age >= 18) {
    console.log(jh[i]);
    }
    
}
console.log("7------------------")

// 7º Dado el array de objetos del ejercicio anterior, insertar en un array aquellos que tengan una edad mayor o
// igual a 18 y los menores a 18 en otro array y mostrar los resultados.

ji = [ 
    { id: 1, name: "Jhon", age: 25,}, 
    { id: 2, name: "Doe", age: 8,}, 
    { id: 3, name: "Clara", age: 15,}, 
    { id: 4, name: "Elisa", age: 30,},
    { id: 4, name: "Pedro", age: 18, }, 
]


arrayMayores0 = [];
arrayMenores0 = [];

for (i = 0; i < ji.length; i++) {
    if (ji[i].age >= 18) {
        arrayMayores0.push(ji[i]);
    } else {
        arrayMenores0.push(ji[i]);
    }
}
console.log(arrayMayores0);
console.log(arrayMenores0);

console.log("8------------------")

// 8º Dado un array de hoteles, incrementa en 10 euros su precio aquellos que tengan menos de 10 habitaciones
// disponibles. Muestra tanto aquellos que cumplan dicha condición como los que no.

jj = [
    {hotelId: 1,
    hotelName: "Jhon",
    availableRooms: 25,
    price: 10.20,},

    {hotelId: 2,
    hotelName: "Doe",
    availableRooms: 8,
    price: 4.25,},

    {hotelId: 3,
    hotelName: "Clara",
    availableRooms: 15,
    price: 14.30,},

    {hotelId: 4,
    hotelName: "Elisa",
    availableRooms: 30,
    price: 10,
    },

    {hotelId: 4,
    hotelName: "Pedro",
    availableRooms: 10,
    price: 8.10,},
]

for (var i = 0; i < jj.length; i++) {
    if (jj[i].availableRooms < 10) {
        jj[i].price += 10;
    }
}
console.log(jj);  

console.log("9------------------")


// 9º Dado un array de hoteles, incrementa en 10 euros su precio aquellos que tengan menos de 10 habitaciones
// disponibles. Muestra solo aquellos que cumplan la condición en un array nuevo.

jb = [
    {
    hoteId: 1,
    hotelName: "Hotel 1",
    availableRooms: 25,
    price: 10.20,
    },
    {
    hoteId: 2,
    hotelName: "Hotel 2",
    availableRooms: 8,
    price: 4.25,
    },
    {
    hoteId: 3,
    hotelName: "Hotel 3",
    availableRooms: 15,
    price: 14.30,
    },
    {
    hoteId: 4,
    hotelName: "Hotel 4",
    availableRooms: 30,
    price: 10,
    },
    {
    hoteId: 5,
    hotelName: "Hotel 5",
    availableRooms: 10,
    price: 8.10,
    },
]

hotelesMenos10Habitaciones = [];

for (i = 0; i < jb.length; i++) {
    if(jb[i].availableRooms < 10) {
        jb[i].price += 10;
        hotelesMenos10Habitaciones.push(jb[i]);
    }
}
console.log(hotelesMenos10Habitaciones);
console.log("10------------------")

// 10º Dado el siguiente array de hotels y el html con un input de texto y un botón. Que muestre el siguiente
// mensaje si existe el hotel: El hotel Hotel 1 existe. Y mostrar el mensaje: El hotel Hotel 1 no existe en caso
// contrario. Pista: Usa un evento de javascript de los visto por ahora en el curso.
// poner un pequeño parrafo

jc = [ 
    { hoteId: 1, hotelName: "Hotel 1", availableRooms: 25, price: 10.20, }, 
    { hoteId: 2, hotelName: "Hotel 2", availableRooms: 8, price: 4.25, }, 
    { hoteId: 3, hotelName: "Hotel 3", availableRooms: 15, price: 14.30, }, 
    { hoteId: 4, hotelName: "Hotel 4", availableRooms: 30, price: 10, }, 
    { hoteId: 5, hotelName: "Hotel 5", availableRooms: 10, price: 8.10, }, 
]


function getMessage() {
    var nameHotel = document.getElementById("textBox").value;
    for(i = 0;i < jc.length;i++) {
        if(jc[i].hotelName == nameHotel) {
            return "Existe un hotel: " + nameHotel;
        }
    }
    return "No existe un hotel: " + nameHotel;
}

function printResult () {
    document.getElementById("resultado").innerText = getMessage();
}

var myButton = document.getElementById("myButton");

myButton.addEventListener("click", printResult);

