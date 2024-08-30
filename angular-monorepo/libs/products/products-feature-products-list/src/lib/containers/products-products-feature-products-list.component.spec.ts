import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsProductsFeatureProductsListComponent } from './products-products-feature-products-list.component';

describe('ProductsProductsFeatureProductsListComponent', () => {
  let component: ProductsProductsFeatureProductsListComponent;
  let fixture: ComponentFixture<ProductsProductsFeatureProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsProductsFeatureProductsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      ProductsProductsFeatureProductsListComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
