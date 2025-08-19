import express from 'express';
const router = express.Router();

// POST /profile - Create a supplier
router.post('/profile', (req, res) => {
  res.json({ message: 'Fornecedor criado com sucesso!' });
});

// GET /:id - Retrieve a supplier by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Fornecedor com ID ${id} consultado com sucesso!` });
});

// PUT /:id - Edit a supplier by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const dados = req.body;
  console.log(dados);
  res.json({ message: `Fornecedor com ID ${id} editado com sucesso!` });
});

// DELETE /:id/:name - Delete a supplier by ID and name
router.delete('/:id/:name', (req, res) => {
  const { id, name } = req.params;
  res.json({ message: `Fornecedor com ID ${id} e nome ${name} excluído com sucesso!` });
});

export default router;
  