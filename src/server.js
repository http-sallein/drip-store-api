import express from "express";
import userRoutes from "./routes/userRoute.js";

const app = express();

app.use(express.json()); // Para que o Express possa ler JSON no corpo das requisições
app.use("/api", userRoutes); // Prefixa todas as rotas com "/api"

// Lidar com erros e outras rotas
app.use((req, res) => {
    res.status(404).send("Not Found");
});

export default app;
