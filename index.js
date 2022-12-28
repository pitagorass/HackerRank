const express = require('express');
const path = require('path')
const https = require('https');

const app = express();
const puerta = 6969;

// settings
app.set('port', puerta);
// middelware
console.log(`${__dirname}`)
// routes
app.use(express.static(path.join(__dirname, 'src/html')));
app.use(express.static(path.join(__dirname, 'src/service')));

app.get('/hacker', (req, res) => {
    res.sendFile(__dirname + '/src/html/index.html');
})

app.get('/hacker/testNode', async (req, res) => {
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
})

app.listen(app.get('port'), () => {
    console.log(`Corriendo Aplicacion En el puerto ${app.get('port')}`)
})