class ProductsController{
    constructor(data,ProductsModel, User, Order){
        this.data=data;
        this.model=ProductsModel;
        this.user=User;
        this.order=Order;
    }
    createProducts(){
        this.model.createNewProducts(this.data);
        this.products=this.model.getProducts();
    }
    getProducts(){
        return this.products;
    }
    getImages(){
        return this.model.getImages();
    }
   addOrder(product, number) {
    if (number <= 0) {
        return;
    }

    const orders = this.user.getOrders();

    const existingOrder = orders.find(
        order => order.product.id === product.id
    );

    if (existingOrder) {
        existingOrder.increaseNumber(number);
    } else {
        const newOrder = new this.order();
        newOrder.setProduct(product);
        newOrder.setNumber(number);
        this.user.addOrder(newOrder);
    }
}
   removeFromOrder(product, number){
    const orders=this.user.getOrders();
    const existingOrder=orders.find(
        order=>order.product.id===product.id
    );
    if(!existingOrder){
        return;
    }
    else{
        if(existingOrder.getNumber()<=number){
            this.user.removeOrder(existingOrder);

        }
        else{
            existingOrder.decreaseNumber(number);
        }
    }
   }
   removeOrder(idOfOrder){
     const orders=this.user.getOrders();
     const existingOrder=orders.find(
        order=>order.getId()===idOfOrder
     );
     if(!existingOrder){
        return;
     }
     this.user.removeOrder(existingOrder);
   }
    showOrders(){
     return this.user.showOrders();
    }
    getOrders(){
        return this.user.getOrders();
    }
    setUser(user){
        this.user=user;
    }
    getUser(){
        return this.user;
    }
}