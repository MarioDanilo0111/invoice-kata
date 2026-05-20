function groupByCustomer(invoices) {
  const grouped = invoices.reduce((acc, invoice) => {
    const customer = invoice.customer;

    if (!acc[customer]) {
      acc[customer] = {
        total: 0,
        unpaid: 0,
        invoices: [],
      };
    }

    if (invoice.status === "unpaid") {
      acc[customer].unpaid += invoice.amount;
    }

    acc[customer].total += invoice.amount;

    acc[customer].invoices.push(invoice);

    return acc;
  }, {});

  for (const toSort in grouped) {
    grouped[toSort].invoices.sort((a, b) => b.amount - a.amount);
  }

  const summary = Object.keys(grouped).map((customer) => ({
    customer: customer,
    total: grouped[customer].total,
    unpaid: grouped[customer].unpaid,
    invoices: grouped[customer].invoices,
  }));

  return { grouped: grouped, summary: summary };
}
module.exports = groupByCustomer;
