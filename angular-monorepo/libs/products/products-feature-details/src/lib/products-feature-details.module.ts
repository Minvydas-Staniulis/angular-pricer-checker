import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductsProductsFeatureDetailsComponent } from './containers/products-products-feature-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProductsProductsFeatureDetailsComponent,
  },
];

@NgModule({
  imports: [CommonModule, MatDialogModule, RouterModule.forChild(routes)],
  declarations: [ProductsProductsFeatureDetailsComponent],
  exports: [ProductsProductsFeatureDetailsComponent],
})
export class ProductsFeatureDetailsModule {}
