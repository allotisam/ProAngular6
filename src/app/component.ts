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

    constructor(ref: ApplicationRef) {
        (<any>window).appRef = ref;
        (<any>window).model = this.model;
    }

    addProduct(p: Product) {
        this.model.saveProduct(p);
    }
}
