import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ButtonComponent } from './components/button/button.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleDescriptionComponent } from './components/title-description/title-description.component';
import { SanitizeHtmlPipe } from './pipes/dom-sanitizer.pipe';
import { SharedInputComponent } from './components/shared-input/shared-input.component';
import { SuccessModalComponent } from './components/success-modal/success-modal.component';

const SHARED_EXPORTS = [
    ButtonComponent,
    TitleDescriptionComponent,
    SanitizeHtmlPipe,
    SharedInputComponent,
    SuccessModalComponent,
];

@NgModule({
    declarations: [
        ...SHARED_EXPORTS,
    ],
    exports: [
        ...SHARED_EXPORTS,
    ],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
    ],
})
export class SharedModule { }
