import { ApplicationRef, Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Model } from './repository.model';
import { Product } from './product.model';
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

    getValidationMessages(state: any, thingName?: string) {
        debugger;
        const thing = state.path || thingName;
        const messages: string[] = [];

        if (state.errors) {
            for (var error in state.errors) {
                switch (error) {
                    case 'required':
                        messages.push(`You must enter a ${thing}`);
                        break;
                    case 'minlength':
                        messages.push(`A ${thing} must be at least ${state.errors['minlength'].requiredLength} characters`);
                        break;
                    case 'pattern':
                        messages.push(`The ${thing} contains illegal characters`);
                        break;
                }
            }
        }
        return messages;
    }

    getFormValidationMessages(form: NgForm): string[] {
        const messages: string[] = [];
        Object.keys(form.controls).forEach(k => {
            this.getValidationMessages(form.controls[k], k).forEach(m => messages.push(m));
        });
        return messages;
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
