import { ProductFacade } from '@angular-monorepo/products-data-access';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'products-products-feature-products-list',
  templateUrl: './products-products-feature-products-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsProductsFeatureProductsListComponent implements OnInit {
  productsList$ = this.facade.productsList$;
  columns: string[] = [
    'name',
    'category',
    'last_price',
    'last_price_date',
    'actions',
  ];

  constructor(private facade: ProductFacade) {}

  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    this.facade.fetchAllProducts();
  }
}
