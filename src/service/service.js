let titulo = document.getElementById("encabezado");
console.log('Titulo identificado como el encabezado', titulo);

/* ---------------------------------------------------------------------------------- */

/* let products = ['eggs', 'milk', 'cheese'];
 console.log('products', products);

 let productPrices = [2.89, 3.29, 5.79];
 console.log('productPrices', productPrices);

 let productSold = ['eggs', 'eggs', 'cheese', 'milk'];
 console.log('productSold', productSold);

 let soldPrice = [2.89, 2.99, 5.97, 3.29];
 console.log('soldPrice', soldPrice); */

/* let products = ['chocolate', 'cheese', 'tomato'];
console.log('products', products);

let productPrices = [15.00, 300.90, 23.44];
console.log('productPrices', productPrices);

let productSold = ['chocolate', 'cheese', 'tomato'];
console.log('productSold', productSold);

let soldPrice = [15.00, 300.90, 10.00];
console.log('soldPrice', soldPrice); */

/* let products = ['rice', 'sugar', 'wheat', 'cheese'];
console.log('products', products);

let productPrices = [16.89, 52.92, 20.89, 345.99];
console.log('productPrices', productPrices);

let productSold = ['rice', 'cheese' ];
console.log('productSold', productSold);

let soldPrice = [18.99, 408.89];
console.log('soldPrice', soldPrice);  */

let errores = 0;
let productsAndPrices = [];
let productSoldAndsoldPrice = [];

//Creacion De Arreglo para realcionar Productos y Precios 
for (let x = 0; x < products.length; x++) {
    console.log('products', products[x])
    console.log('productPrices', productPrices[x])

    productsAndPrices.push([{ producto: products[x] }, { precio: productPrices[x] }])
    console.log('productsAndPrices', productsAndPrices[x])
}

//Creacion De Arreglo para realcionar productSold y soldPrice
for (let x = 0; x < productSold.length; x++) {
    console.log('productSold', productSold[x])
    console.log('soldPrice', soldPrice[x])

    productSoldAndsoldPrice.push([{ productSold: productSold[x] }, { soldPrice: soldPrice[x] }])
    console.log('productSoldAndsoldPrice', productSoldAndsoldPrice[x])
}


for (let x = 0; x < productsAndPrices.length; x++) {
    for (let z = 0; z < productSoldAndsoldPrice.length; z++) {
        console.log(`productsAndPrices[${x}][${0}].producto`, productsAndPrices[x][0].producto);
        console.log(`productSoldAndsoldPrice[${z}][${0}].productSold`, productSoldAndsoldPrice[z][0].productSold);

        console.log(`productsAndPrices[${x}][${1}].precio`, productsAndPrices[x][1].precio);
        console.log(`productSold[${z}][${1}].soldPrice`, productSoldAndsoldPrice[z][1].soldPrice);

        if (productsAndPrices[x][0].producto === productSoldAndsoldPrice[z][0].productSold) {
            if (productsAndPrices[x][1].precio === productSoldAndsoldPrice[z][1].soldPrice) {
                errores;
            } else {
                errores++;
            }
        }
    }
}
console.log('Cantidad De Errores', errores);

/* ---------------------------------------------------------------------------------- */


//Creacion De Arreglo para realcionar Productos y Precios 
for (const key in products) {
    console.log('products', products[key])
    console.log('productPrices', productPrices[key])

    productsAndPrices.push([{ producto: products[key] }, { precio: productPrices[key] }])
    console.log('productsAndPrices', productsAndPrices[key]);
}
//Creacion De Arreglo para realcionar productSold y soldPrice
for (const key in productSold) {
    console.log('productSold', productSold[key])
    console.log('soldPrice', soldPrice[key])

    productSoldAndsoldPrice.push([{ productSold: productSold[key] }, { soldPrice: soldPrice[key] }])
    console.log('productSoldAndsoldPrice', productSoldAndsoldPrice[key])
}

for (const key in productsAndPrices) {
    for (const keyx in productSoldAndsoldPrice) {
        console.log(`productsAndPrices[${key}][${0}].producto`, productsAndPrices[key][0].producto);
        console.log(`productSoldAndsoldPrice[${keyx}][${0}].productSold`, productSoldAndsoldPrice[keyx][0].productSold);

        console.log(`productsAndPrices[${key}][${1}].precio`, productsAndPrices[key][1].precio);
        console.log(`productSold[${keyx}][${1}].soldPrice`, productSoldAndsoldPrice[keyx][1].soldPrice);

        if (productsAndPrices[key][0].producto === productSoldAndsoldPrice[keyx][0].productSold) {
            if (productsAndPrices[key][1].precio === productSoldAndsoldPrice[keyx][1].soldPrice) {
                errores;
            } else {
                errores++;
            }
        }
    }
}
console.log('Cantidad De Errores', errores);

/* ---------------------------------------------------------------------------------- */

let resx = null;
let data = '';
resx = await new Promise((resolve, reject) => {
    https.get('https://jsonmock.hackerrank.com/api/moviesdata/search/?Title=spiderman&page=1', (resp) => {
        // Un fragmento de datos ha sido recibido.
        resp.on('data', (chunk) => {
            data += chunk;

        });
        // Toda la respuesta ha sido recibida. Imprimir el resultado.
        resp.on('end', () => {
            resolve(data)
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
})
const dataTitle = JSON.parse(resx);
let arrayTitle = [];
dataTitle.data.forEach(element => {
    arrayTitle.push(element.Title)
});
console.log('Arreglo Final Titulos Peliculas', arrayTitle)

/* ---------------------------------------------------------------------------------- */
