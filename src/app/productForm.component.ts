import { Component, Output, EventEmitter } from '@angular/core';
import { Product } from './product.model';
import { ProductFormGroup } from './form.model';

@Component({
    selector: 'paProductForm',
    templateUrl: 'productForm.component.html',
    styles: ['div { background-color: lightgreen }']
})
export class ProductFormComponent { 
    form: ProductFormGroup = new ProductFormGroup();
    newProduct: Product = new Product();
    formSubmitted = false;

    @Output('paNewProduct')
    newProductEvent = new EventEmitter<Product>();

    submitForm(form: any) {
        this.formSubmitted = true;
        if (form.valid) {
            this.newProductEvent.emit(this.newProduct);
            this.newProduct = new Product();
            this.form.reset();
            this.formSubmitted = false;
        }
    }
}
