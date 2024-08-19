import express from "express";
import cors from 'cors';

import userRoutes from "./routes/userRoute.js";
import categoryRoutes from "./routes/categoryRoute.js";
import productRoutes from "./routes/productRoute.js";

import { swaggerDocs } from "./config/swaggerDocumentation.js";

const app = express();
  
app.use(cors());

app.use(express.json()); 

app.use("/api/v1", userRoutes); 
app.use("/api/v1", categoryRoutes); 
app.use("/api/v1", productRoutes);

swaggerDocs(app); 

app.use((req, res) => {
    res.status(404).send("Not Found");
});

export default app;
