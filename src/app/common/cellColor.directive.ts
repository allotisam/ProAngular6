import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: 'td[paApplyColor]'
})
export class PaCellColor {

    @HostBinding('class')
    bgClass = '';

    setColor(dark: boolean) {
        this.bgClass = dark ? 'bg-dark' : '';
    }
}
