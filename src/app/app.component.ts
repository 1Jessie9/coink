import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { Platform } from '@ionic/angular';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {
    constructor(
        private platform: Platform,
    ) {
        this.initializeApp();
    }

    async initializeApp() {
        await this.platform.ready();

        await SplashScreen.show({
            showDuration: 3000,
            autoHide: true,
        });
    }
}
