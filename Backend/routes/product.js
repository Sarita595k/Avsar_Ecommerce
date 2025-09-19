import express from "express";
const router = express.Router();
import { getProducts, getSingleProduct, newProduct, updateProduct } from "../controllers/productController.js";

router.get('/products', getProducts)
router.get('/products/:id', getSingleProduct)

router.post('/admin/products/new', newProduct)

router.put('/admin/products/:id', updateProduct)
export default router