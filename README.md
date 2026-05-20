# Invoice Data Engine

A small data transformation project focused on grouping, aggregating, and reshaping invoice data.

## Features

- Group invoices by customer
- Calculate totals and unpaid amounts
- Sort invoices by amount (descending)
- Transform grouped data into API-friendly format

## Tech

- JavaScript (Node.js)
- Jest (testing)

## Example Output

### Grouped

```json
{
  "A": { "total": 450, "unpaid": 150 }
}
```

### Summary

```json
[{ "customer": "A", "total": 450, "unpaid": 150 }]
```

## Run tests

```bash
npm install
npm test
```
