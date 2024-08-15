import express from 'express';
import userRoutes from './routes/userRoute.js'; // Atualize o caminho se necessário

const app = express();

app.use(express.json()); // Para que o Express possa ler JSON no corpo das requisições
app.use('/api', userRoutes); // Prefixa todas as rotas com "/api"

// Lidar com erros e outras rotas
app.use((req, res) => {
  res.status(404).send('Not Found');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
