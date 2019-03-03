import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Product } from '../model/product.model';
import { Model } from '../model/repository.model';
import { MODES, SharedState, SHARED_STATE } from './sharedState.model';

@Component({
    selector: 'paForm',
    templateUrl: 'form.component.html',
    styleUrls: [
        'form.component.css'
    ]
})
export class FormComponent {
    product = new Product();
    originalProduct = new Product();
    editing = false;

    constructor(private model: Model, activeRoute: ActivatedRoute, private router: Router) {
        activeRoute.params.subscribe(params => {
            this.editing = params['mode'] === 'edit';
            const id = params['id'];
            if (id != null && id !== undefined) {
                Object.assign(this.product, this.model.getProduct(Number(id)) || new Product());
                Object.assign(this.originalProduct, this.product);
            }
        });
    }

    submitForm(form: NgForm) {
        if (form.valid) {
            this.model.saveProduct(this.product);
            this.originalProduct = this.product;
            this.router.navigateByUrl('/');
        }
    }
}
