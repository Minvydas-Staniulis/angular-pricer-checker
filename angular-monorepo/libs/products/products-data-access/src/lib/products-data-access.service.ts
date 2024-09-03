import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Product } from '@angular-monorepo/products-types';
import { API_TOKEN } from '@shared/common/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  endpointUrl = `${this.apiUrl}/Products`;

  constructor(
    private http: HttpClient,
    @Inject(API_TOKEN) private apiUrl: string
  ) {}

  getProductsList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.endpointUrl);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.endpointUrl}/${id}`);
  }
}
