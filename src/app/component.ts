import { ApplicationRef, Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Model } from './repository.model';
import { Product } from './product.model';
import { ProductFormGroup } from './form.model';
import { debug } from 'util';

@Component({
    selector: 'app',
    templateUrl: 'template.html'
})
export class ProductComponent {
    model: Model = new Model();
    selectedProduct: string;
    newProduct = new Product();

    formSubmitted = false;
    form = new ProductFormGroup();

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

    get jsonProduct() {
        return JSON.stringify(this.newProduct);
    }

    addProduct(p: Product) {
        console.log('New Product: ' + this.jsonProduct);
    }

    submitForm(form: NgForm) {
        this.formSubmitted = true;
        if (form.valid) {
            this.addProduct(this.newProduct);
            this.newProduct = new Product();
            form.reset();
            this.formSubmitted = false;
        }
    }
}
