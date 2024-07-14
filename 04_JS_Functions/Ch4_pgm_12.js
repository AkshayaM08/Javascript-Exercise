// Using functions to add and display tax

var sale1;
var sale2;
var sale3;
var sale;
var calculateTax;
var displaySale;

sale1 = { price: 140, taxRate: 15 };
sale2 = { price: 40, taxRate: 10 };
sale3 = { price: 120, taxRate: 20 };

calculateTax = function () {
    sale.tax = sale.price * sale.taxRate / 100;
    sale.total = sale.price + sale.tax;
};

displaySale = function () {
  console.log("price = $" + sale.price);
  console.log("tax @ " + sale.taxRate + "% = $" + sale.tax);
  console.log("total cost = $" + sale.total);
};

sale = sale1;
calculateTax();
displaySale();

sale = sale2;
calculateTax();
displaySale();

sale = sale3;
calculateTax();
displaySale();


sale4 = { price: 200, taxRate: 18 };

sale = sale4;
calculateTax();
displaySale();


var processSale = function (sale) {
    calculateTax.call(sale);
    displaySale.call(sale);
};

sale1 = { price: 140, taxRate: 15 };
sale2 = { price: 40, taxRate: 10 };
sale3 = { price: 120, taxRate: 20 };
sale4 = { price: 200, taxRate: 18 };

processSale(sale1);
processSale(sale2);
processSale(sale3);
processSale(sale4);


class Sale {
    constructor(price, taxRate) {
        this.price = price;
        this.taxRate = taxRate;
    }

    calculateTax() {
        this.tax = this.price * this.taxRate / 100;
        this.total = this.price + this.tax;
    }

    displaySale() {
        console.log("price = $" + this.price);
        console.log("tax @ " + this.taxRate + "% = $" + this.tax);
        console.log("total cost = $" + this.total);
    }
}

var sale1 = new Sale(140, 15);
var sale2 = new Sale(40, 10);
var sale3 = new Sale(120, 20);
var sale4 = new Sale(200, 18);

sale1.calculateTax();
sale1.displaySale();

sale2.calculateTax();
sale2.displaySale();

sale3.calculateTax();
sale3.displaySale();

sale4.calculateTax();
sale4.displaySale();

class Sale {
    constructor(price, taxRate) {
        this.price = price;
        this.taxRate = taxRate;
    }

    calculateTax() {
        this.tax = this.price * this.taxRate / 100;
        this.total = this.price + this.tax;
    }

    displaySale() {
        console.log("price = $" + this.price);
        console.log("tax @ " + this.taxRate + "% = $" + this.tax);
        console.log("total cost = $" + this.total);
    }

    processSale() {
        this.calculateTax();
        this.displaySale();
    }
}

var sale1 = new Sale(140, 15);
var sale2 = new Sale(40, 10);
var sale3 = new Sale(120, 20);
var sale4 = new Sale(200, 18);

sale1.processSale();
sale2.processSale();
sale3.processSale();
sale4.processSale();

class Sale {
    constructor(price, taxRate) {
        this.price = price;
        this.taxRate = taxRate;
    }

    calculateTax() {
        this.tax = this.price * this.taxRate / 100;
        this.total = this.price + this.tax;
    }

    displaySale() {
        console.log("price = $" + this.price);
        console.log("tax @ " + this.taxRate + "% = $" + this.tax);
        console.log("total cost = $" + this.total);
    }

    processSale() {
        this.calculateTax();
        this.displaySale();
    }
}

class SalesManager {
    constructor() {
        this.sales = [];
    }

    addSale(sale) {
        this.sales.push(sale);
    }

    processAllSales() {
        this.sales.forEach(sale => {
            sale.processSale();
        });
    }
}

var salesManager = new SalesManager();
salesManager.addSale(new Sale(140, 15));
salesManager.addSale(new Sale(40, 10));
salesManager.addSale(new Sale(120, 20));
salesManager.addSale(new Sale(200, 18));

salesManager.processAllSales();


class Sale {
    constructor(price, taxRate) {
        this.price = price;
        this.taxRate = taxRate;
    }

    calculateTax() {
        this.tax = this.price * this.taxRate / 100;
        this.total = this.price + this.tax;
    }

    displaySale() {
        console.log("price = $" + this.price);
        console.log("tax @ " + this.taxRate + "% = $" + this.tax);
        console.log("total cost = $" + this.total);
    }

    updatePrice(newPrice) {
        this.price = newPrice;
    }

    updateTaxRate(newTaxRate) {
        this.taxRate = newTaxRate;
    }

    processSale() {
        this.calculateTax();
        this.displaySale();
    }
}

var sale1 = new Sale(140, 15);
sale1.updatePrice(150);
sale1.updateTaxRate(10);
sale1.processSale();




/* Further Adventures
 *
 * 1) Add a fourth sale object.
 *
 * 2) Update the code so that tax is calculated
 *    and the new sale is displayed.
 *
 * Having two separate functions to calculate tax
 * and display sales is good, each has a specific purpose.
 * Having to call both functions
 * for each sale object is not so good.
 *
 * 3) Can you change the code so that you don't
 *    have to call both functions for every sale?
 *
 */