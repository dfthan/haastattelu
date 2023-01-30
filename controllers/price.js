const router = require("express").Router();
const Product = require("../database/schemas/product");
const calculatePrice = require("../lib/calculatePrice");

router.post("/", async (req, res) => {
    const { productId, discount, quantity, month } = req.body;
    const discountOptions = {
        "discount": discount,
        "quantity": quantity,
        "month": month
    }

    const product = await Product.findById(productId);
    if (!product) {
        return res.status(404).send("Product not found");
    }
    console.log(product.price)

    const discountedPrice = calculatePrice(product.price, discountOptions)

    res.status(200).json({ "price": discountedPrice })
})

module.exports = router