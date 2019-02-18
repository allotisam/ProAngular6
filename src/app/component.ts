import { ApplicationRef, Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Model } from './repository.model';
import { Product } from './product.model';
import { ProductFormGroup } from './form.model';

@Component({
    selector: 'app',
    templateUrl: 'template.html'
})
export class ProductComponent {
    model: Model = new Model();
    newProduct: Product = new Product();
    form: ProductFormGroup = new ProductFormGroup();
    formSubmitted: boolean = false;
    showTable = true;

    constructor(ref: ApplicationRef) {
        (<any>window).appRef = ref;
        (<any>window).model = this.model;
    }

    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        const numOfProducts = this.model.getProducts();
        console.log(numOfProducts);
        return numOfProducts;
    }

    addProduct(p: Product) {
        this.model.saveProduct(p);
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
