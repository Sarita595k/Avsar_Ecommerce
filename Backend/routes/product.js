import express from "express";
const router = express.Router();
import { deleteProduct, getProducts, getSingleProduct, newProduct, updateProduct } from "../controllers/productController.js";

// router for getting all products 
router.get('/products', getProducts)

// router for getting single product
router.get('/products/:id', getSingleProduct)

// router for adding new product
router.post('/admin/products/new', newProduct)

// router for updating product
router.put('/admin/products/:id', updateProduct)

// router for deleting product
router.delete('/admin/products/:id', deleteProduct)
export default router

// end of code