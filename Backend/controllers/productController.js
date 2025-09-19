import { Product } from "../models/product.js"

// create new product 
export const newProduct = async (req, res, next) => {
    const product = await Product.create(req.body)
    res.status(201).json({
        success: true,
        product
    })
}

// get all products /api/products
export const getProducts = async (req, res, next) => {
    const products = await Product.find();
    res.status(200).json({
        success: true,
        count: products.length,
        products
    })
}

// get single product details  api/products/:id

export const getSingleProduct = async (req, res, next) => {

    try {
        const product = await Product.findById(req.params.id)

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }
        res.status(200).json({
            success: true,
            product
        })
    } catch (err) {
        return res.status(404).json({
            success: false,
            message: "Invalid product id"
        })
    }
}

// update product api/products/:id

export const updateProduct = async (req, res, next) => {
    try {
        let product = await Product.findById(req.params.id)
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }

        product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })

        res.status(200).json({
            success: true,
            product
        })
    } catch (err) {
        return res.status(404).json({
            success: false,
            message: "Invalid product id"
        })
    }
}

// delete product api/admin/product/:id

export const deleteProduct = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }
        res.status(200).json({
            success: true,
            message: "Product is deleted successfully"
        })
    } catch (err) {
        return res.status(404).json({
            success: false,
            message: "Invalid product id"
        })
    }
}
