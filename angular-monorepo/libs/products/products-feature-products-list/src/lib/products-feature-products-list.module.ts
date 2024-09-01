import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsProductsFeatureProductsListComponent } from './containers/products-products-feature-products-list.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { ProductsProductsFeatureProductsListComponentRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild(ProductsProductsFeatureProductsListComponentRoutes),
  ],
  declarations: [ProductsProductsFeatureProductsListComponent],
})
export class ProductsFeatureProductsListModule {}
