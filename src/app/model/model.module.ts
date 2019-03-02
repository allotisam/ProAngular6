import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Model } from './repository.model';
import { RestDataSource, REST_URL } from './rest.datasource';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        Model, RestDataSource,
        { provide: REST_URL, useValue: `http://${location.hostname}:3500/products` }
    ]
})
export class ModelModule { }
