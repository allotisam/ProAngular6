import { Injectable, Inject, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { Product } from './product.model';

export const REST_URL = new InjectionToken('rest_url');

@Injectable()
export class RestDataSource {

    constructor(private http: HttpClient, @Inject(REST_URL) private url: string) { }

    getData(): Observable<Product[]> {
        return this.sendRequst<Product[]>('get', this.url);

        // we can use JSONP to make the ajax call in case of calling a server that doesn't support CORS, but it skirts around the browser's security policy. use it only has a fall back.
        // return this.http.jsonp<Product[]>(this.url, 'callback');
    }

    saveProduct(product: Product): Observable<Product> {
        return this.sendRequst<Product>('post', this.url, product);
    }

    updateProduct(product: Product): Observable<Product> {
        return this.sendRequst<Product>('put', `${this.url}/${product.id}`, product);
    }

    deleteProduct(id: number): Observable<Product> {
        return this.sendRequst<Product>('delete', `${this.url}/${id}`);
    }

    private sendRequst<T>(verb: string, url: string, body?: Product): Observable<T> {
        let myHeaders = new HttpHeaders();
        myHeaders = myHeaders.set('Access-Key', '<secret>');
        myHeaders = myHeaders.set('Application-Names', ['exampleApp', 'proAngular']);

        return this.http.request<T>(verb, url, {
            body: body,
            headers: myHeaders
        })
        .pipe(delay(5000))
        .pipe(catchError((error: Response) => throwError(`Network Error: ${error.statusText} (${error.status})`)));
    }
}
