export class Product {
    uid: number;
    name: string;
    brand: string;
    description: string;
    price: number;
    quantity: number;
    constructor(uid, name, brand, description, price, quantity) {
        this.uid = uid;
        this.name = name;
        this.brand = brand;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }
}
