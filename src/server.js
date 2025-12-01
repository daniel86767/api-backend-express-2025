import express from 'express';
import authRouter from './Routers/authRouter.js';
import profileRouter from './Routers/profileRouter.js';
import supplierRouter from './Routers/supplierRouter.js';
import { logger } from './generated/middlewares/logger.js';
import cors from 'cors';
import productRouter from './Routers/productRouter.js';
import { errorHandler } from './generated/middlewares/errorHandler.js'
import { notFoundError } from './generated/middlewares/notFoundError.js'
const app = express();// Cria a aplicação Express
const PORT = 3000;// Define a porta onde o servidor irá rodar


app.use(logger)// Usa o middleware de logging para todas as rotas
app.use(cors()); // Habilita CORS para todas as rotas e origens
app.use(express.json()); // converte o body para JSON


// Rotas organizadas corretamente
app.use('/profile', profileRouter);// Usa o profileRouter para rotas que começam com /profile
app.use('/products', productRouter);// Usa o productRouter para rotas que começam com /products
app.use('/suppliers', supplierRouter);// Usa o supplierRouter para rotas que começam com /suppliers
app.use('/auth', authRouter); // 

app.use(notFoundError)
app.use(errorHandler)






app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);// Informa que o servidor está rodando
});
export default app; // Exportando o app para testes ou outros usos
// Isso permite que o app seja importado em outros arquivos, como testes