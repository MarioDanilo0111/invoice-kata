const groupByCustomer = require("../src/groupByCustomer");
const invoices = require("../src/invoice");

test("Invoice to be sorted by customer", () => {
  const result = groupByCustomer(invoices);

  expect(result.grouped).toEqual({
    A: {
      total: 450,
      unpaid: 150,
      invoices: [
        { id: 7, customer: "A", amount: 200, status: "paid" },
        { id: 3, customer: "A", amount: 150, status: "unpaid" },
        { id: 1, customer: "A", amount: 100, status: "paid" },
      ],
    },
    B: {
      total: 600,
      unpaid: 350,
      invoices: [
        { id: 5, customer: "B", amount: 250, status: "paid" },
        { id: 2, customer: "B", amount: 200, status: "unpaid" },
        { id: 8, customer: "B", amount: 150, status: "unpaid" },
      ],
    },
    D: {
      total: 700,
      unpaid: 400,
      invoices: [
        { id: 4, customer: "D", amount: 300, status: "paid" },
        { id: 9, customer: "D", amount: 250, status: "unpaid" },
        { id: 6, customer: "D", amount: 150, status: "unpaid" },
      ],
    },
  });
  expect(result.summary).toEqual([
    {
      customer: "A",
      total: 450,
      unpaid: 150,
      invoices: [
        { id: 7, customer: "A", amount: 200, status: "paid" },
        { id: 3, customer: "A", amount: 150, status: "unpaid" },
        { id: 1, customer: "A", amount: 100, status: "paid" },
      ],
    },
    {
      customer: "B",
      total: 600,
      unpaid: 350,
      invoices: [
        { id: 5, customer: "B", amount: 250, status: "paid" },
        { id: 2, customer: "B", amount: 200, status: "unpaid" },
        { id: 8, customer: "B", amount: 150, status: "unpaid" },
      ],
    },
    {
      customer: "D",
      total: 700,
      unpaid: 400,
      invoices: [
        { id: 4, customer: "D", amount: 300, status: "paid" },
        { id: 9, customer: "D", amount: 250, status: "unpaid" },
        { id: 6, customer: "D", amount: 150, status: "unpaid" },
      ],
    },
  ]);
});
