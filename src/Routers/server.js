import express from 'express';
import profileRouter from './profileRouter.js';
import productRouter from './productRouter.js';
import supplierRouter from './supplierRouter.js';
import carRouter from './carRouter.js';
const app = express();
const PORT = 3000;

app.use(express.json()); // converte o body para JSON

// Rotas organizadas corretamente
app.use('/profile', profileRouter);
app.use('/products', productRouter);
app.use('/suppliers', supplierRouter);
app.use('/car', carRouter);




app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
export default app; // Exportando o app para testes ou outros usos
// Isso permite que o app seja importado em outros arquivos, como testes