import express from "express";
const router = express.Router();
import { getProducts, newProduct } from "../controllers/productController.js";

router.get('/products', getProducts)

router.post('/products/new', newProduct)
export default router