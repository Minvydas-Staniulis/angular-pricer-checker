import { Product } from '@angular-monorepo/products-types';
import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

const api = '[Products API]';

export const fetchAllProducts = createAction(`${api} Fetch All Products`);

export const fetchedAllProducts = createAction(
  `${api} Fetched All Products`,
  props<{ productsList: Product[] }>()
);

export const fetchAllProductsFailed = createAction(
  `${api} Fetch All Products Failed`,
  props<{ error: HttpErrorResponse }>()
);

export const fetchProduct = createAction(
  `${api} Fetch Product by ID`,
  props<{ id: string }>()
);

export const fetchedProduct = createAction(
  `${api} Fetched Product by ID`,
  props<{ product: Product }>()
);

export const fetchProductFailed = createAction(
  `${api} Fetch Product Failed`,
  props<{ error: HttpErrorResponse }>()
);
