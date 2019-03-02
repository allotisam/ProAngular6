import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationCancel } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { MessageService } from './message.service';
import { Message } from './message.model';


@Component({
    selector: 'paMessages',
    templateUrl: 'message.component.html'
})
export class MessageComponent {
    lastMessage: Message;

    constructor(messageService: MessageService, router: Router) {
        messageService.messages.subscribe(m => this.lastMessage = m);
        router.events
            .pipe(filter(e => e instanceof NavigationEnd || e instanceof NavigationCancel))
            .subscribe(e => { this.lastMessage = null; });
    }
}
