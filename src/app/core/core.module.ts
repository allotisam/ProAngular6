import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Subject } from 'rxjs';

import { ModelModule } from '../model/model.module';
import { TableComponent } from './table.component';
import { FormComponent } from './form.component';
import { StatePipe } from './state.pipe';

import { MessageModule } from '../messages/message.module';
import { MessageService } from '../messages/message.service';
import { Message } from '../messages/message.model';
import { Model } from '../model/repository.model';

@NgModule({
    imports: [
        BrowserModule, FormsModule, ModelModule, MessageModule, RouterModule
    ],
    declarations: [
        TableComponent, FormComponent, StatePipe
    ],
    exports: [
        ModelModule, TableComponent, FormComponent
    ],
    providers: []
})
export class CoreModule { }

