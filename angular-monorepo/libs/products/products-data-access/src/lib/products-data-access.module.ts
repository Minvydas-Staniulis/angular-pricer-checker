import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './products-data-access.service';

@NgModule({
  imports: [CommonModule],
  providers: [ProductsService],
})
export class ProductsDataAccessModule {}
