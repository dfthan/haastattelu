const router = require("express").Router();
const Customer = require("../database/schemas/customer");

router.get("/", (req, res) => {
    Customer.find({}, (err, customers) => {
        if (err) {
            console.error(err);
            return res.status(404).send("Failed to get customers");
        }
        res.status(200).send(customers);
    });
});

router.get("/:id", (req, res) => {
    Customer.findById(req.params.id, (err, customer) => {
        if (err) {
            console.error(err);
            return res.status(404).send("Error retrieving customer with id " + req.params.id);
        }
        res.status(200).send(customer);
    });
});

router.post("/", (req, res) => {
    const customer = new Customer(req.body);
    customer.save((err, customer) => {
        if (err) {
            console.error(err);
            return res.status(404).send("Error creating customer");
        }
        res.status(201).send(customer);
    });
});

module.exports = router;