import { Component, EventEmitter, Output } from '@angular/core';
import { IInfoDescription } from 'src/app/shared/interfaces/info-description.interface';
import { AGREEMENT_DESCRIPTION } from '../../constants/descriptions';
import { IButton } from 'src/app/shared/interfaces/button.interface';
import { AGREEMENT_BTN } from '../../constants/form';

@Component({
    selector: 'app-agreement',
    templateUrl: './agreement.component.html',
    styleUrls: ['./agreement.component.scss'],
})
export class AgreementComponent {
    @Output() checkAgreement: EventEmitter<boolean> = new EventEmitter<boolean>();
    public descriptionAgreement: IInfoDescription = AGREEMENT_DESCRIPTION;
    public agreementBtn: IButton = AGREEMENT_BTN;

    constructor() { }

    checkBtn() {
        this.checkAgreement.emit();
    }

    changeCheck(event: any) {
        this.agreementBtn.disabled = !event.detail.checked;
    }
}
