/**********************************************************
 * 
 * F E C T H
 * 
 ***********************************************************/



/*
- fetch es una llamada
- En la llamada se envía la url de la API a consultar
- El primer ".then()" es una llamada y dentro se envía una arrow function. Aquí se convierte la respuesta de String a JSON. Recibe un argumento y retorna ese argumento en formato JSON
- El segundo ".then()" es una llamada y se envia un arrow function. Aquí se procesa la respuesta del API convertida en JSON en primer .then y aquí es donde se procesa el objeto de respuesta obtenida del API, por ejemplo: la variable "data" se puede procesar lo objetos que vienen dentro de el; ex: data.Data, "Data" es un valor que viene dentro del objeto "data"
- El ".catch" es una llamada y se envía un arrow function. Aquí solamente se optiene el error al intentar conectarse o procesar la información hacia el API






*/


// Ex.

fetch('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD')

    .then(respuesta => respuesta.json())
    .then((data) => {
        console.log(data.Data)
        console.log(data.Message)
    })

    .catch((err) => {
        console.log(err)
    });








