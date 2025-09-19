import express from "express";
const router = express.Router();
import { deleteProduct, getProducts, getSingleProduct, newProduct, updateProduct } from "../controllers/productController.js";

router.get('/products', getProducts)
router.get('/products/:id', getSingleProduct)

router.post('/admin/products/new', newProduct)

router.put('/admin/products/:id', updateProduct)

router.delete('/admin/products/:id', deleteProduct)
export default router