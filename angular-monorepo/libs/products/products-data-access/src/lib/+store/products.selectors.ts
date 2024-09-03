import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProduct from './products.reducer';
import { Product } from '@angular-monorepo/products-types';

export const selectProductState =
  createFeatureSelector<fromProduct.ProductState>(
    fromProduct.productsFeatureKey
  );

export const selectProductList = createSelector(
  selectProductState,
  (state: fromProduct.ProductState) => state?.productsList
);

export const selectProduct = (id: string) =>
  createSelector(selectProductList, (products: Product[]) =>
    products.find((product) => product.id === id)
  );

export const selectSelectedProduct = createSelector(
  selectProductState,
  (state) => state.selectedProduct
);

export const selectIsLoading = createSelector(
  selectProductState,
  (state: fromProduct.ProductState) => state.isLoading
);

export const selectIsLoaded = createSelector(
  selectProductState,
  (state: fromProduct.ProductState) => state.isLoaded
);

export const selectError = createSelector(
  selectProductState,
  (state: fromProduct.ProductState) => state.error
);
