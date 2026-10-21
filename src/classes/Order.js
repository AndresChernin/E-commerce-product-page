class Order {
    constructor() {
        
    }
    getId(){
    return this.product.getId();
    }
    setProduct(product){
        this.product=product;
    }
    setNumber(number){
        this.number=number;
    }
    increaseNumber(number) {
        this.number += number;
    }
    decreaseNumber(number) {
        this.number -= number;
    }
    getNumber(){
        return this.number;
    }
    getTotalPrice() {
        const price = Number(this.product.actualPrice.slice(1));
        return `$${this.number * price}.00`;
    }

    printOrder() {
        return `${this.product.title}: ${this.number}x${this.product.actualPrice}`;
    }
    getImage(){
        return this.product.getImage();
    }
    getTitle(){
        return this.product.getTitle();
    }
    getPrevPrice(){
        return this.product.getPrevPrice();
    }
    getActPrice_andNumber(){
        return `${this.product.actualPrice} x ${this.number}`;
    }
    getSmallImages(){
        return this.product.getSmallImages();
    }
}