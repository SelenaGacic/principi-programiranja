(function () {
    'use strict'

    function Product(name, price, exDate) {
        this.id = (Math.random() * (99999 - 10000) + 10000).toFixed(0);
        this.name = name;
        this.price = price.toFixed(2);
        this.expirationDate = new Date(exDate);
    }
    var p1 = new Product("Banana", 70.7895, "12 mart 2018");
    var p2 = new Product("Apple", 75.7895, "20 mart 2018");
    var p3 = new Product("Coffee", 65.7895, "20 mart 2018");

    function ShoppingBag() {
        this.listOfProducts = [];
    }

    Product.prototype.getInfo = function () {
        var firstLetter = this.name.charAt(0);
        var secondLetter = this.name.charAt(1);
        var result = firstLetter + secondLetter;
        return result.toUpperCase() + this.id + ", " + this.name + ", " + this.price;
    }

    ShoppingBag.prototype.addProduct = function (product) {
        this.listOfProducts.push(product);
    }

    var sb1 = new ShoppingBag();
    sb1.addProduct(p1);
    sb1.addProduct(p2);
    sb1.addProduct(p3);

    ShoppingBag.prototype.averagePriceOfProducts = function () {
        var sum = 0;
        var counter = 0;
        for (var i = 0; i < this.listOfProducts.length; i++) {
            sum += parseInt(this.listOfProducts[i].price);
            counter++;
        }
        var averagePrice = sum / counter;
        return averagePrice.toFixed(3);
    }


    ShoppingBag.prototype.getMostExpensive = function () {
        var mostExpencive = this.listOfProducts[0].price;
        for (var i = 0; i < this.listOfProducts.length; i++) {
            if (this.listOfProducts[i].price > mostExpencive) {
                mostExpencive = this.listOfProducts[i].price;
            }
        }
        return mostExpencive;
    }

    ShoppingBag.prototype.calculateTotalPrice = function () {
        var sum = 0;
        for (var i = 0; i < this.listOfProducts.length; i++) {
            sum += parseInt(this.listOfProducts[i].price);
        }
        return sum;
    }

    function PaymentCard(acountBalance, validDate) {
        this.balance = parseFloat(acountBalance.toFixed(2));
        this.validDate = new Date(validDate);
        this.status = this.validDate > new Date();
    }
    var pc1 = new PaymentCard(1000, "12 jan 2036");


    function checkoutAndBuy(shoppingBag, paymentCard) {
        if (paymentCard.status) {
            if (shoppingBag.calculateTotalPrice() <= paymentCard.balance) {
                paymentCard.balance = paymentCard.balance - shoppingBag.calculateTotalPrice();
                return "Now you have " + paymentCard.balance + " money on your payment card."
            } else {
                return "Sorry, you don't have enough money to pay."
            }
        } else {
            return "Your payment card is invalid, you can't use it."
        }
    }

    console.log(checkoutAndBuy(sb1, pc1));


























})();