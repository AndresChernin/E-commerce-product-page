class ProductsModel{
    constructor(Product){
        this.Product=Product;
    }
    createNewProducts(data){
        this.data = data;
        this.products = 
        this.data.map(element => {

                     const product = 
                     new this.Product(element.id,
                                      element.firma,
                                      element.title,
                                      element.description,
                                      element.actPrice,
                                      element.prevPrice,
                                      element.discount,
                                      element.images,
                                      element.thumbnailImages);

                     

                     return product;
                     });
    }
    getProducts(){
        return this.products;
    }
}