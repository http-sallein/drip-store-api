const express = require('express');
const router = express.Router();

let products =[];

//Endpoint para obter uma lista de produtos
router.get('/', (req,res) => {
    res.json(products);
});

//Endpoint para obter informações de um produto pelo ID
router.get('/:id', (req, res) => {
    const product = products.find(p =>p.id ===
        parseInt(req.params.id));

        if(!product) return
        res.status(404).send('Produto não encontrado');
        res.json(product);
});

//Endpoint para criar um novo produto
router.post('/', (req, res) => {
    const newProduct ={
        id:products.length + 1,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

//Endpoint para atualizar um produto existente
router.put('/:id', (req, res) => {
    const product = product.find(p =>p.id ===
        parseInt(req.params.id));
        
        if (!product) return
        res.status(404).send('Produto não encontrado');

        product.name = req.body.name ||
        product.name;
            product.price = req.body.price ||
            product.price;
                product.description = req.body.description ||
                product.description;

                res.json(product);
});

module.exports = router;