const router = require("express").Router();
const Product = require("../database/schemas/product");

router.get("/", (req, res) => {
    Product.find({}, (err, products) => {
        if (err) {
            console.error(err);
            return res.status(404).send("Failed to get products");
        }
        res.status(200).send(products);
    });
})

router.get("/:id", (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (err) {
            console.error(err);
            return res.status(404).send("Error retrieving product with id " + req.params.id);
        }
        res.status(200).send(product);
    });
})

router.post("/", (req, res) => {
    const product = new Product(req.body);
    product.save((err, product) => {
        if (err) {
            console.error(err);
            return res.status(404).send(err.message);
        }
        res.status(201).send(product);
    });
})

module.exports = router
