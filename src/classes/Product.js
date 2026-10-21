class Product {
    constructor(
        id,
        firma,
        title,
        description,
        actualPrice,
        previousPrice,
        discount,
        images,
        thumbnailImages
    ) {
        this.id=id;
        this.firma = firma;
        this.title = title;
        this.description = description;
        this.actualPrice = actualPrice;
        this.previousPrice = previousPrice;
        this.discount = discount;
        
        this.images = images;
        this.thumbnailImages = thumbnailImages;
    }

    
   
    clone() {
        const copy = new Product(
            this.id,
            this.firma,
            this.title,
            this.description,
            this.actualPrice,
            this.previousPrice,
            this.discount,
            this.images,
            this.thumbnailImages
        );

        

        return copy;
    }
    printOrder(){
        return `${this.title}:${this.number}x${this.actualPrice}`
    }
    getImage(){
        return this.thumbnailImages[0];
    }
    getTitle(){
        return this.title;
    }
    getPrevPrice(){
        return this.previousPrice;
    }
    getId(){
        return this.id;
    }
    getBigImages(){
        return this.images;
    }
    getSmallImages(){
        return this.thumbnailImages;
    }    
}