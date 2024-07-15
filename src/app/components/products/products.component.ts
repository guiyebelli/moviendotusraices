import { Component } from '@angular/core'
import { Product } from '../../models/productos.model'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  allProducts: Product[] = Product.getProducts()
}
