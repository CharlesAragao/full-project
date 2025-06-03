import express from "express";
import cors from "cors";
import env from "dotenv";
import userRoutes from "./routes/user.routes";
// import productRoutes from "./routes/product.routes";
import categoryRoutes from "./routes/categoryRoutes";


env.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/categories", categoryRoutes);

export default app;