import { Product } from '@angular-monorepo/products-types';
import { HttpErrorResponse } from '@angular/common/http';
import { Action, createReducer, on } from '@ngrx/store';
import {
  fetchAllProducts,
  fetchAllProductsFailed,
  fetchedAllProducts,
} from './products.actions';

export const productsFeatureKey = 'products';

export interface ProductState {
  selectedProduct: Product | null;
  productsList: Product[];
  isLoading: boolean;
  isLoaded: boolean;
  error: HttpErrorResponse | null;
}

export const initialState: ProductState = {
  selectedProduct: null,
  productsList: [],
  isLoading: false,
  isLoaded: false,
  error: null,
};

export const productReducer = createReducer(
  initialState,
  on(
    fetchAllProducts,
    (state): ProductState => ({
      ...state,
      isLoading: true,
      isLoaded: false,
      error: null,
    })
  ),
  on(
    fetchedAllProducts,
    (state, { productsList }): ProductState => ({
      ...state,
      productsList: productsList,
      isLoading: false,
      isLoaded: true,
      error: null,
    })
  ),
  on(
    fetchAllProductsFailed,
    (state, { error }): ProductState => ({
      ...state,
      isLoading: false,
      isLoaded: true,
      error: error,
    })
  )
);

export function reducer(state: ProductState | undefined, action: Action) {
  return productReducer(state, action);
}
