import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import {
  selectError,
  selectIsLoaded,
  selectIsLoading,
  selectProduct,
  selectProductList,
  selectProductState,
} from './products.selectors';
import { fetchAllProducts, fetchProduct } from './products.actions';

@Injectable({ providedIn: 'root' })
export class ProductFacade {
  constructor(private store: Store, private actions$: Actions) {}

  productStore$ = this.store.pipe(select(selectProductState));

  productsList$ = this.store.pipe(select(selectProductList));
  product$ = this.store.pipe(select(selectProduct));
  isLoading$ = this.store.pipe(select(selectIsLoading));
  isLoaded$ = this.store.pipe(select(selectIsLoaded));
  errors$ = this.store.pipe(select(selectError));

  fetchAllProducts() {
    this.store.dispatch(fetchAllProducts());
  }

  fetchProductById(id: string) {
    this.store.dispatch(fetchProduct({ id }));
  }
}
