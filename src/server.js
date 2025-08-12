import express   from 'express'

const app = express()
const port = 3000

app.use(express.json()); //converte o body para json

app.post('/profile', (req, res) => {

  res.json({ message: 'perfil  criado com sucesso!' });
});

app.get('/profile', (req, res) => {
  res.json({ message: 'perfil de usuario!' });
});

app.put('/profile', (req, res) => {
  const dados = req.body;
  console.log(dados);
  res.json({ message: 'perfil editado criado com sucesso!' });
});

app.delete('/profile', (req, res) => {
  res.json({ message: 'perfil excluído criado com sucesso!' });
});

app.listen(port,() =>{
  console.log(`Api rodando em http://localhost:${port}`);
}) 
 