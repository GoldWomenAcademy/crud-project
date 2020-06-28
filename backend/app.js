const express = require('express');
const app = express();

app.use((req, res) => {
   res.json({ message: 'Votre requête a bien été reçue !' }); 
});

app.use('/api/stuff', (req, res, next) => {
   const stuff = [
     {
       name: 'Livre1',
       description: 'La description du produit',
       price: 4900,
       inStock: 'Produit en stock',
     },
     {
      name: 'Livre2',
      description: 'La description du produit',
      price: 3200,
      inStock: 'Produit en stock',
     },
   ];
   res.status(200).json(stuff);
 });
module.exports = app