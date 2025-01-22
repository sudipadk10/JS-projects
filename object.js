function createItem(item, price) {
    this.item = item;
    this.price = price;
}

createItem.prototype.increament = function(){
    this.price += 1; // increment the price by 1 of that item who calls the function .
}

createItem.prototype.display = function(){
    console.log(`Item: ${this.item}, Price: ${this.price}`);
    }

const chai = new createItem('chai', 30); //Without new it will throw an error.
const pakoda = new createItem('pakoda', 20);

chai.display()