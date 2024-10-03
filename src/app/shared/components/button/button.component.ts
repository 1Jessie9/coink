import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IButton } from '../../interfaces/button.interface';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @Input() button!: IButton;
    @Output() btnClick: EventEmitter<string> = new EventEmitter();

    constructor() { }

    onClick() {
        if (!this.button.disabled && !this.button.loading) {
            this.btnClick.emit(this.button.id);
        }
    }

}
