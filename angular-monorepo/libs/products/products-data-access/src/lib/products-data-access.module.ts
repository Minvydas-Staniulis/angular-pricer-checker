import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './products-data-access.service';
import { StoreModule } from '@ngrx/store';
import { productReducer, productsFeatureKey } from './+store/products.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './+store/products.effects';
import { HttpClientModule } from '@angular/common/http';
import { API_TOKEN, BASE_API_URL } from '@angular-monorepo/constants';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(productsFeatureKey, productReducer),
    EffectsModule.forFeature([ProductEffects]),
  ],
  providers: [ProductsService, { provide: API_TOKEN, useValue: BASE_API_URL }],
})
export class ProductsDataAccessModule {}
