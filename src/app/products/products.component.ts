import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  listOfProducts: Product[] = [];
  filteredProducts: Product[] = [];
  searchString = '';

  constructor() {
    this.listOfProducts.push(
      new Product(1, 'Televisión', 'LG', '59 pulgadas, plana', 6000, 2),
      new Product(2, 'Computadora', 'Acer', '250 SSD, 8GB RAM', 12000, 7),
      new Product(3, 'Monitor', 'BENQ', '30 pulgadas curvo', 35000, 4),
      new Product(4, 'Audífonos', 'Sony', 'sencillos, cable 1m', 120, 10),
      new Product(5, 'Mouse', 'Logitech', 'Inalámbrico color rojo', 200, 9)
    );
    this.filteredProducts = this.listOfProducts.slice(0);
  }

  ngOnInit(): void {
  }

  searchProducts(): void {
    this.filteredProducts = this.listOfProducts.filter((product) => {
      return  product.name.toUpperCase().includes(this.searchString.toUpperCase()) ||
              product.description.toUpperCase().includes(this.searchString.toUpperCase());
    });
  }

}
