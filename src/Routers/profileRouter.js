import express, { Router } from 'express'
const router = express.Router()

router.post('/profile', (req, res) => {

    res.json({ message: 'perfil  criado com sucesso!' });
    profile: dados
  });

  router.get('/', (req, res) => {
    res.json({ message: 'perfil de usuario consultado com sucesso!' });
  });

router.get('/profile/:id', (req, res) => {
    const dados = req.body;
    console.log(dados);
    res.json({ message: 'perfil editado criado com sucesso!' });
  });

  router.delete('/profile/:id/:name', (req, res) => {
    res.json({ message: 'perfil com id{id$} excluido com sucesso' });
  });
  
  export default router;

  