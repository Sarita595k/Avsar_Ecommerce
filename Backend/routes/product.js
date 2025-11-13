import express from "express";
const router = express.Router();
import { deleteProduct, getProducts, getSingleProduct, newProduct, updateProduct } from "../controllers/productController.js";

// router for getting all products 
router.get('/', getProducts)

// router for getting single product
router.get('/:id', getSingleProduct)

// router for adding new product
router.post('/admin/new', newProduct)

// router for updating product
router.put('/admin/:id', updateProduct)

// router for deleting product
router.delete('/admin/:id', deleteProduct)
export default router

// end of code