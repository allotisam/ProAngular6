import { Component, Output, EventEmitter, ViewEncapsulation, Inject, SkipSelf } from '@angular/core';
import { Product } from './product.model';
import { ProductFormGroup } from './form.model';
import { Model } from './repository.model';
import { VALUE_SERVICE } from './valueDisplay.directive';

@Component({
    selector: 'paProductForm',
    templateUrl: 'productForm.component.html',
    // providers: [
    //     { provide: VALUE_SERVICE, useValue: 'Oranges' }
    // ]
    viewProviders: [
        { provide: VALUE_SERVICE, useValue: 'Oranges' }
    ]
})
export class ProductFormComponent { 
    form: ProductFormGroup = new ProductFormGroup();
    newProduct: Product = new Product();
    formSubmitted = false;

    @Output('paNewProduct')
    newProductEvent = new EventEmitter<Product>();

    constructor(private model: Model,
        @Inject(VALUE_SERVICE) @SkipSelf() private serivceValue: string) {
            console.log('Service Value: ' + serivceValue);
         }

    submitForm(form: any) {
        this.formSubmitted = true;
        if (form.valid) {
            // this.newProductEvent.emit(this.newProduct);
            this.model.saveProduct(this.newProduct);
            this.newProduct = new Product();
            this.form.reset();
            this.formSubmitted = false;
        }
    }
}
