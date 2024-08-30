import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsProductsFeatureProductsListComponent } from './containers/products-products-feature-products-list.component';
import { RouterModule } from '@angular/router';
import { ProductsProductsFeatureProductsListComponentRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProductsProductsFeatureProductsListComponentRoutes),
  ],
  declarations: [ProductsProductsFeatureProductsListComponent],
})
export class ProductsFeatureProductsListModule {}
