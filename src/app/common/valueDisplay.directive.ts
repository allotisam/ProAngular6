import { Directive, InjectionToken, Inject, HostBinding, Host, Optional } from '@angular/core';

export const VALUE_SERVICE = new InjectionToken('value_service');

@Directive({
    selector: '[paDisplayValue]'
})
export class PaDisplayValueDirective {

    @HostBinding('textContent')
    elementContent: string;

    constructor(@Inject(VALUE_SERVICE) @Host() @Optional() serviceValue: string) {
        this.elementContent = serviceValue;
    }
}
