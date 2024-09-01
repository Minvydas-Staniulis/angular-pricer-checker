import { ProductFacade } from '@angular-monorepo/products-data-access';
import { Product } from '@angular-monorepo/products-types';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'products-products-feature-products-list',
  templateUrl: './products-products-feature-products-list.component.html',
})
export class ProductsProductsFeatureProductsListComponent implements OnInit {
  productsList$ = this.facade.productsList$;
  columns: string[] = ['name', 'category', 'last_price', 'last_price_date'];

  constructor(private facade: ProductFacade) {}

  ngOnInit(): void {
    this.productsList$.subscribe((value) => {
      console.log(value);
    });
  }
}
