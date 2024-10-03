import { Component, EventEmitter, Output } from '@angular/core';
import { IInfoDescription } from 'src/app/shared/interfaces/info-description.interface';
import { NUMBER_PHONE_DESCRIPTION } from '../../constants/descriptions';

@Component({
    selector: 'app-phone-number',
    templateUrl: './phone-number.component.html',
    styleUrls: ['./phone-number.component.scss'],
})
export class PhoneNumberComponent {
    @Output() phoneNumberChange: EventEmitter<number> = new EventEmitter<number>();
    public descriptionNumber: IInfoDescription = NUMBER_PHONE_DESCRIPTION;
    public phoneNumber: string = '';

    constructor() { }

    applyMask(phone: string): string {
        const digits = phone.replace(/\D/g, '');
        let maskedPhone = '';
        if (digits.length <= 3) {
            maskedPhone = digits;
        } else if (digits.length <= 6) {
            maskedPhone = digits.slice(0, 3) + ' ' + digits.slice(3);
        } else {
            maskedPhone = digits.slice(0, 3) + ' ' + digits.slice(3, 6) + ' ' + digits.slice(6, 10);
        }
        return maskedPhone;
    }

    addNumber(number: number) {
        const phoneDigitsOnly = this.phoneNumber.replace(/\D/g, '');
        if (phoneDigitsOnly.length < 10) {
            this.phoneNumber = this.phoneNumber + number.toString();
            this.phoneNumber = this.applyMask(this.phoneNumber);
        }
    }

    removeNumber() {
        this.phoneNumber = this.phoneNumber.slice(0, -1);
    }

    numberPhoneLength(): number {
        return this.phoneNumber.replace(/\D/g, '').length;
    }

    submitPhoneNumber() {
        if (this.numberPhoneLength() === 10) {
            const cleanedNumber = Number(this.phoneNumber.replace(/\D/g, ''));
            this.phoneNumberChange.emit(cleanedNumber);
        }
    }
}
