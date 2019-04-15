import { ApplicationRef, Component } from '@angular/core';
import { Model } from './repository.model';
import { Product } from './product.model';

@Component({
    selector: 'app',
    templateUrl: 'template.html'
})
export class ProductComponent {
    model: Model = new Model();
    selectedProduct: string;

    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }

    getSelected(product: Product): boolean {
        if (product.name && this.selectedProduct) {
            return product.name.toLowerCase() === this.selectedProduct.toLowerCase();
        }

        return false;
    }
}
