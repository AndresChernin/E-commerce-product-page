class User {
    constructor() {
        this.orders = [];
        this.purcases=[]
    }

    addOrder(order) {
        this.orders.push(order);
    }
    removeOrder(order) {
        const index = this.orders.indexOf(order);

        if (index !== -1) {
            this.orders.splice(index, 1);
        }
    }
    showOrders() {
       
        return this.orders.map(product => product.printOrder());
    }
    getOrders(){
        return this.orders;
    }
}