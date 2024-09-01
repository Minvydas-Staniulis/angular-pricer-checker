export interface Product {
  id: string;
  name: string;
  category: string;
  imageUri: string;
  lastPrice: number | null;
  lastPriceDate: Date | null;
}
