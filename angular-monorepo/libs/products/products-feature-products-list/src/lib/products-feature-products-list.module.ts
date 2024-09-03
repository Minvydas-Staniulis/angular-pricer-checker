import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsProductsFeatureProductsListComponent } from './containers/products-products-feature-products-list.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { ProductsProductsFeatureProductsListComponentRoutes } from './lib.routes';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProductsDataAccessModule } from '@angular-monorepo/products-data-access';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatTooltipModule,
    MatButtonModule,
    MatMenuModule,
    ProductsDataAccessModule,
    RouterModule.forChild(ProductsProductsFeatureProductsListComponentRoutes),
  ],
  declarations: [ProductsProductsFeatureProductsListComponent],
})
export class ProductsFeatureProductsListModule {}
