import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProduct from './products.reducer';

export const selectProductState =
  createFeatureSelector<fromProduct.ProductState>(
    fromProduct.productsFeatureKey
  );

export const selectProductList = createSelector(
  selectProductState,
  (state: fromProduct.ProductState) => state?.productsList
);

export const selectProduct = createSelector(
  selectProductState,
  (state: fromProduct.ProductState) => state?.selectedProduct
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
