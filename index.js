//importamos express
const express = require('express');
//Iniciamos aplicacion ejecutando nuestro "import"
const app = express();
//Y declaramos el puerto
const port = 3000;

//esto es una ruta
app.get('/', (req, res) => {
  res.send('Hola mi server en express');
})

app.get('/nueva-ruta',(req,res)=>{
  res.send('Hola soy una nueva ruta')
})




//definir puerto
app.listen(port, ()=> {
  console.log('mi port' + port);
});
