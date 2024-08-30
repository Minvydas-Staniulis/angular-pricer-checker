import { Route } from '@angular/router';
import { ProductsProductsFeatureProductsListComponent } from './containers/products-products-feature-products-list.component';

export const ProductsProductsFeatureProductsListComponentRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductsProductsFeatureProductsListComponent,
  },
];
