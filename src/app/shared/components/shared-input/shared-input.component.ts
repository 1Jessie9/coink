import { Component, Input, OnInit } from '@angular/core';
import { IInputConfig } from '../../interfaces/input-config.interface';
import { FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-shared-input',
    templateUrl: './shared-input.component.html',
    styleUrls: ['./shared-input.component.scss'],
})
export class SharedInputComponent {
    @Input() config?: IInputConfig;
    @Input() formGroup?: FormGroup;
    public selectedDate?: string;
    public isModalOpen: boolean = false;

    constructor(
    ) { }

    openDateModal() {
        this.isModalOpen = true;
    }

    getDateDisplayValue(controlName: string): string | null {
        const dateValue = this.formGroup?.get(controlName)?.value;
        return dateValue ? new Date(dateValue).toLocaleDateString('es-ES') : null;
    }

    onDateSelected(event: any, controlName: string) {
        this.formGroup?.get(controlName)?.setValue(event.detail.value);
        this.isModalOpen = false;
    }

    validateNumberInput(event: any) {
        const input = event.target.value;
        event.target.value = input.replace(/[^0-9]/g, '');
    }
}
