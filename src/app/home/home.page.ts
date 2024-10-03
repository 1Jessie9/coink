import { Component } from '@angular/core';
import { IButton } from '../shared/interfaces/button.interface';
import { CREATE_ACCOUNT_BTN, LOGIN_ACCOUNT_BTN } from './constants/buttons';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    public createAccountBtn: IButton = CREATE_ACCOUNT_BTN;
    public loginAccountBtn: IButton = LOGIN_ACCOUNT_BTN;

    constructor(
        private navCtrl: NavController
    ) { }

    btnClick(btnId: string) {
        if (btnId === "createAccount") {
            this.navCtrl.navigateForward(["sign-up"]);
        }
    }
}
