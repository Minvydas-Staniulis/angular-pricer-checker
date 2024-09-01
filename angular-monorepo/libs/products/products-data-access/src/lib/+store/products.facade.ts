import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import {
  selectError,
  selectIsLoaded,
  selectIsLoading,
  selectProductList,
  selectProductState,
} from './products.selectors';
import { fetchAllProducts } from './products.actions';

@Injectable({ providedIn: 'root' })
export class ProductFacade {
  constructor(private store: Store, private actions$: Actions) {}

  productStore$ = this.store.pipe(select(selectProductState));

  productsList$ = this.productStore$.pipe(select(selectProductList));
  isLoading$ = this.productStore$.pipe(select(selectIsLoading));
  isLoaded$ = this.productStore$.pipe(select(selectIsLoaded));
  errors$ = this.productStore$.pipe(select(selectError));

  fetchAllProducts() {
    this.store.dispatch(fetchAllProducts());
  }
}
