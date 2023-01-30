# Price Calculation API

## Introduction

Calculates price of a product based on purchase quantity, given month and special deal

## Usage

POST product to `/products` endpoint with name and price

API has endpoint, `/price`, which accepts a `POST` request with the following JSON payload:

```
{
    "productId": "PRODUCT_ID",
    "quantity": NUMBER_OF_ITEMS,
    "month": MONTH_AS_NUMBER,
    "discount": PERCENTAGE_AS_DECIMALS
}
```

## Testing

Test core functionality with:

```
npm run test:price
```

Run all integration tests in docker:

```
sudo docker compose -f docker-compose.test.yml up --abort-on-container-exit
```
