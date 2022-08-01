import express from "express";
import morgan from "morgan";
import cors from "cors";
//rutas 
import cursoRoutes from "./routes/curso.routes";
const app =express();
//configuraciones 
app.set("port", 4000);

//midelwers intermedios
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
// rutas

app.use("/api/curso",cursoRoutes);

export default app;