import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpPageRoutingModule } from './sign-up-routing.module';

import { SignUpPage } from './sign-up.page';
import { PhoneNumberComponent } from './components/phone-number/phone-number.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AgreementComponent } from './components/agreement/agreement.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SignUpPageRoutingModule,
        SharedModule,
        ReactiveFormsModule,
    ],
    declarations: [
        SignUpPage,
        PhoneNumberComponent,
        AccountDetailsComponent,
        AgreementComponent,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ]
})
export class SignUpPageModule { }
