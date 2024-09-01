import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './products.reducer';

export const selectProductState =
  createFeatureSelector<ProductState>('product');

export const selectProductList = createSelector(
  selectProductState,
  (state: ProductState) => state.productsList
);

export const selectIsLoading = createSelector(
  selectProductState,
  (state: ProductState) => state.isLoading
);

export const selectIsLoaded = createSelector(
  selectProductState,
  (state: ProductState) => state.isLoaded
);

export const selectError = createSelector(
  selectProductState,
  (state: ProductState) => state.error
);
