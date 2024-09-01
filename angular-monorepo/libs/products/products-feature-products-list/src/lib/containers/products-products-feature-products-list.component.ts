import { Product } from '@angular-monorepo/products-types';
import { Component } from '@angular/core';
import { ProductsService } from 'libs/products/products-data-access/src/lib/products-data-access.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'products-products-feature-products-list',
  templateUrl: './products-products-feature-products-list.component.html',
})
export class ProductsProductsFeatureProductsListComponent {
  productsList$: Observable<Product[]>;
  columns: string[] = ['name', 'category', 'last_price', 'last_price_date'];

  constructor(private service: ProductsService) {
    this.productsList$ = this.service.getProductsList();
  }
}
