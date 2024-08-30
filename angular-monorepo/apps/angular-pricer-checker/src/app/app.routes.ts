import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@angular-monorepo/products-feature-products-list').then(
        (m) => m.ProductsFeatureProductsListModule
      ),
  },
];
