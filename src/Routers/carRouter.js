import express from 'express'

const router = express.Router();
// Rota para criar um carro

app.put('/:id', (req, res) => {
    const  id  = req.params.id;          
    const { marca, modelo } = req.body;  
    console.log(`ID do carro: ${id}`);  

    // Verifica se marca e modelo foram fornecidos
    res.json({
      message: `${marca} ${modelo} com id ${id} alterado`,
      marca: marca,
      modelo: modelo
    });
  });