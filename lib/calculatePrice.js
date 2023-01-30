function calculatePrice(price = 0, discountOptions) {
    const specialDiscount = (isNaN(discountOptions.discount)) ? 0 : discountOptions.discount;
    const quantityDiscount = calcQuantDiscount(discountOptions.quantity);
    const seasonDiscount = calcSeasonDiscount(discountOptions.month);

    // multiply price by 100 to avoid floating point errors
    let priceAsCents = price * 100;

    let discountedPrice = priceAsCents * (1 - specialDiscount)
    discountedPrice *= 1 - quantityDiscount
    discountedPrice *= 1 - seasonDiscount

    discountedPrice = Math.round(discountedPrice) / 100;
    if (discountedPrice < 0) return "Price cannot be negative"
    return discountedPrice;
}

function calcSeasonDiscount(month) {
    // An example how the time of the year can affect the price
    if (month >= 3 && month <= 5) {
        return 0.1;
    }
    return 0;
}

function calcQuantDiscount(quantity) {
    if (quantity >= 50) {
        let discount = Math.log10(quantity) / 100;
        return discount;
    }
    return 0;
}


module.exports = calculatePrice;
