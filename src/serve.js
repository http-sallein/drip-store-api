const express = require('express');
const app = express();
const port = 3000;
// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());
//Importando as rotas de produtos
const productRoutes = require('./routes/product');
//Usando as rotas de produtos
app.use('/products', productRoutes);

app.listen(port, () => {
    console.log('Servidor rodando na porta ${port}');
});