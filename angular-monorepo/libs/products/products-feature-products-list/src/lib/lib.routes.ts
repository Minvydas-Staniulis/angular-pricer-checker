import { Route } from '@angular/router';
import { ProductsProductsFeatureProductsListComponent } from './containers/products-products-feature-products-list.component';

export const ProductsProductsFeatureProductsListComponentRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductsProductsFeatureProductsListComponent,
  },
  {
    path: 'products',
    component: ProductsProductsFeatureProductsListComponent,
    children: [
      {
        path: ':id',
        loadChildren: () =>
          import('@angular-monorepo/products-feature-details').then(
            (m) => m.ProductsFeatureDetailsModule
          ),
      },
    ],
  },
];
