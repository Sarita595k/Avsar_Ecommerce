import { Product } from "../models/product.js"

// create new product 
export const newProduct = async (req, res, next) => {
    const product = await Product.create(req.body)
    res.status(201).json({
        success: true,
        product
    })
}
export const getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "Test route"
    })
}