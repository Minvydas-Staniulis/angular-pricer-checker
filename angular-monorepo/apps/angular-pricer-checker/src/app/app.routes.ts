import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'products',
    loadComponent: () =>
      import('@angular-monorepo/products-feature-products-list').then(
        (m) => m.ProductsFeatureProductsListModule
      ),
  },
];
