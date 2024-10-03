import { Component, Input } from '@angular/core';
import { IModal } from '../../interfaces/modal.interface';
import { ModalController, NavController } from '@ionic/angular';

@Component({
    selector: 'app-success-modal',
    templateUrl: './success-modal.component.html',
    styleUrls: ['./success-modal.component.scss'],
})
export class SuccessModalComponent {
    @Input() infoModal?: IModal;

    constructor(
        private navCtrl: NavController,
        private modalController: ModalController,
    ) { }

    btnClick() {
        this.modalController.dismiss();
    }
}
