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

  function formatInvoice(invoices) {
    return invoices.map((item) => ({
      id: item.id,
      amount: item.amount,
      status: item.status,
    }));
  }

  const summary = Object.keys(grouped).map((customer) => {
    const group = grouped[customer];

    return {
      customer,
      total: group.total,
      unpaid: group.unpaid,
      paid: group.total - group.unpaid,
      invoiceCount: group.invoices.length,
      invoices: formatInvoice(group.invoices),
    };
  });

  console.log(summary);

  return { grouped: grouped, summary: summary };
}
module.exports = groupByCustomer;
