const carrito = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
   ];


console.log("----MOSTRAR EL CARRITO DE LA COMPRA-----");


for (product of carrito) {
    var p = document.createElement("p");
    p.innerText = product.name;
    document.getElementById("product").appendChild(p);
}

console.log(carrito);

console.log("----LISTAR TODOS LOS PRODUCTOS-----");

function print (product) {
    console.log("id: " + product.id);
    console.log("name: " + product.name);
    console.log("price: " + product.price);
    console.log("count: " + product.count);
    console.log("premium: " + product.premium);
}

for (i = 0; i < carrito.length; i++) {
    print(carrito[i]);
}

console.log("----ELIMINAR EL PRODUCTO ID 54657-----");

function deleteProduct (id) {
    for (i = 0; i < carrito.length; i++) {
        if(carrito[i].id == id) {
            carrito.splice(i, 1);
        }
    }
    console.log(carrito);
}

deleteProduct(54657);
console.log("----CALCULAR EL TOTAL DEL CARRITO DE LA COMPRA-----");


function total () {
    var total = 0;
    for (i = 0; i < carrito.length; i++) {
      total += carrito[i].price * carrito[i].count;
    }
    return total;
}

console.log(total() + " €");

console.log("----FILTRAR POR LOS PRODUCTOS QUE SEAN PREMIUM-----");

var premiumProducts =[];


for (product of carrito) {
    if(product.premium == true) {
        premiumProducts.push(product)
    }
}

console.log(premiumProducts);

console.log('----SI TODOS LOS PRODUCTOS SON PREMIUM "GASTOS DE ENVIO CERO" SI NO "CON GASTOS DE ENVIO"-----');



function shippingCosts () {
   
    for (i = 0; i < carrito.length; i++) {
        if(carrito[i].premium != true) {
            return "Con gastos de envio";
        }
    }
    return "Gastos de envio 0";
}

console.log(shippingCosts());