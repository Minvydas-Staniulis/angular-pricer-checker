import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsProductsFeatureDetailsComponent } from './products-products-feature-details.component';

describe('ProductsProductsFeatureDetailsComponent', () => {
  let component: ProductsProductsFeatureDetailsComponent;
  let fixture: ComponentFixture<ProductsProductsFeatureDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsProductsFeatureDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsProductsFeatureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
