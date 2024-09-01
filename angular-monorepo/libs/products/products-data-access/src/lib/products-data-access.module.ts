import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './products-data-access.service';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './+store/products.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './+store/products.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('product', productReducer),

    EffectsModule.forFeature([ProductEffects]),
  ],
  providers: [ProductsService],
})
export class ProductsDataAccessModule {}
