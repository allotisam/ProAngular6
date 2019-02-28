import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '../common/common.module';
import { PaDiscountDisplayComponent } from './discountDisplay.component';
import { PaDiscountEditorComponent } from './discountEditor.component';
import { ProductFormComponent } from './productForm.component';
import { ProductTableComponent } from './productTable.component';

@NgModule({
    imports: [
        BrowserModule, FormsModule, ReactiveFormsModule, CommonModule
    ],
    declarations: [
        PaDiscountDisplayComponent, PaDiscountEditorComponent, ProductFormComponent, ProductTableComponent
    ],
    exports: [
        ProductFormComponent, ProductTableComponent
    ]
})
export class ComponentsModule { }

