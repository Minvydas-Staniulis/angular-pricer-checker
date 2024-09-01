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
