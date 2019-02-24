import { ApplicationRef, Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'productComponent.component.html',
    // styles: [ '/deep/ div { border: 2px black solid; font-style:italic }']
})
export class ProductComponent {
    // model: Model = new Model();

    // constructor(ref: ApplicationRef, private model: Model) {
    //     (<any>window).appRef = ref;
    //     (<any>window).model = this.model;
    // }

    // addProduct(p: Product) {
    //     this.model.saveProduct(p);
    // }
}
