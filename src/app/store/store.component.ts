import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
    selector: 'store',
    templateUrl: 'store.component.html'
})
export class StoreComponent {

    public selectedCategory = null;
    public productsPerPage = 4;
    public selectedPage = 1;

    constructor(private repository: ProductRepository) { }

    get products(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
        return this.repository.getProducts(this.selectedCategory).slice(pageIndex, pageIndex + this.productsPerPage);
    }

    get categories(): string[] {
        return this.repository.getCategories();
    }

    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
    }

    changePageSize(newSize: number) {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    }

    get pageNumbers(): number[] {
        const selectedProductsCount = this.repository.getProducts(this.selectedCategory).length;

        return Array(Math.ceil(selectedProductsCount / this.productsPerPage))
            .fill(0)
            .map((x, i) => i + 1);
    }

    get pageCount(): number {
        const selectedProductsCount = this.repository.getProducts(this.selectedCategory).length;
        const pageCount = Math.ceil(selectedProductsCount / this.productsPerPage);

        return pageCount;
    }
}
