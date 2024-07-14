// Adding tax to find the total cost

var sale1;
var sale2;
var sale3;
var sale4;  // New variable for the fourth sale

sale1 = { price: 140, taxRate: 15 };
sale2 = { price: 40, taxRate: 10 };
sale3 = { price: 120, taxRate: 20 };
sale4 = { price: 60, taxRate: 12 };  // New sale object

// Calculating tax and total for each sale
sale1.tax = sale1.price * sale1.taxRate / 100;
sale2.tax = sale2.price * sale2.taxRate / 100;
sale3.tax = sale3.price * sale3.taxRate / 100;
sale4.tax = sale4.price * sale4.taxRate / 100;  // Calculating tax for the new sale

sale1.total = sale1.price + sale1.tax;
sale2.total = sale2.price + sale2.tax;
sale3.total = sale3.price + sale3.tax;
sale4.total = sale4.price + sale4.tax;  // Calculating total for the new sale

// Function to log sale details using template literals
function logSale(sale, saleNumber) {
  console.log(`Sale ${saleNumber}:`);
  console.log(`price = $${sale.price}`);
  console.log(`tax @ ${sale.taxRate}% = $${sale.tax.toFixed(2)}`);
  console.log(`total cost = $${sale.total.toFixed(2)}`);
}

// Log details for each sale
logSale(sale1, 1);
logSale(sale2, 2);
logSale(sale3, 3);
logSale(sale4, 4);





/* Further Adventures
 *
 * 1) Add the details for a fourth sale.
 *
 * 2) Log the fourth sale to the console.
 *    Use the same format as the others.
 *
 * 3) Add code to separate out the different
 *    sales on the console.
 *
 */