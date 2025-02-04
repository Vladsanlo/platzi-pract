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


app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Product 1',
      price: 1000
    },
    {
      name: 'Product 2',
      price: 2000
    },
  ]
  );
})

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});






//definir puerto
app.listen(port, ()=> {
  console.log('mi port' + port);
});
