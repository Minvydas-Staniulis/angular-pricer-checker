import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { ProductsService } from '../products-data-access.service';
import {
  fetchAllProducts,
  fetchAllProductsFailed,
  fetchedAllProducts,
  fetchedProduct,
  fetchProduct,
  fetchProductFailed,
} from './products.actions';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchAllProducts),
      mergeMap((): Observable<Action> => {
        return this.productService.getProductsList().pipe(
          map((productsList) => {
            return fetchedAllProducts({
              productsList,
            });
          }),
          catchError((error) => of(fetchAllProductsFailed({ error })))
        );
      })
    )
  );

  loadOneProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchProduct),
      mergeMap(({ id }) =>
        this.productService.getProductById(id).pipe(
          map((product) => fetchedProduct({ product })),
          catchError((error) => of(fetchProductFailed({ error })))
        )
      )
    )
  );

  constructor(
    private store: Store,
    private actions$: Actions,
    private productService: ProductsService
  ) {}
}
