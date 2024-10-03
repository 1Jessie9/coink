import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IInfoDescription } from 'src/app/shared/interfaces/info-description.interface';
import { ACCOUNT_DETAILS_DESCRIPTION } from '../../constants/descriptions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDocumentType } from 'src/app/shared/interfaces/document-type.interface';
import { IGender } from 'src/app/shared/interfaces/gender.interface';
import { DataSignUpService } from 'src/app/shared/services/data-sign-up.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { IInputConfig } from 'src/app/shared/interfaces/input-config.interface';
import { INPUTS_CONFIG_ACCOUNT, INPUTS_CONFIG_USER, SUBMIT_BTN } from '../../constants/form';
import { IButton } from 'src/app/shared/interfaces/button.interface';
import { IUserData } from 'src/app/shared/interfaces/user-data.interface';

@Component({
    selector: 'app-account-details',
    templateUrl: './account-details.component.html',
    styleUrls: ['./account-details.component.scss'],
})
export class AccountDetailsComponent implements OnInit {
    @Output() formData: EventEmitter<IUserData> = new EventEmitter<IUserData>();
    public descriptionAccountDetails: IInfoDescription = ACCOUNT_DETAILS_DESCRIPTION;
    public registrationForm: FormGroup;
    public documentTypes: IDocumentType[] = [];
    public genders: IGender[] = [];
    public loading: boolean = false;
    public inputConfigs: IInputConfig[] = INPUTS_CONFIG_USER;
    public inputConfigsAccount: IInputConfig[] = INPUTS_CONFIG_ACCOUNT;
    public submitBtn: IButton = SUBMIT_BTN;

    constructor(
        private formBuilder: FormBuilder,
        private dataSignUpService: DataSignUpService,
        private toastService: ToastService,
    ) {
        this.registrationForm = this.formBuilder.group({
            documentType: ['', Validators.required],
            documentNumber: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
            documentIssueDate: ['', Validators.required],
            birthDate: ['', Validators.required],
            gender: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            confirmEmail: ['', Validators.required],
            pin: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
            confirmPin: ['', Validators.required],
        }, {
            validators: [this.matchingFields('email', 'confirmEmail'), this.matchingFields('pin', 'confirmPin')],
        });
    }

    async ngOnInit() {
        this.registrationForm.valueChanges.subscribe(() => {
            this.submitBtn.disabled = this.registrationForm.invalid;
        });

        this.loading = true;
        this.loadDocumentTypes();
        this.loadGenders();
    }

    updateInputConfigOptions(controlName: string, options: any[]) {
        const config = this.inputConfigs.find(config => config.controlName === controlName);
        if (config) {
            config.options = options;
        }
    }

    loadDocumentTypes() {
        this.dataSignUpService.getDocumentTypes().subscribe({
            next: (data) => {
                this.documentTypes = data;
                this.updateInputConfigOptions('documentType', this.documentTypes);
            },
            error: (error) => {
                this.handleError(error);
            },
            complete: () => {
                this.loading = false;
            }
        });
    }

    loadGenders() {
        this.dataSignUpService.getGenders().subscribe({
            next: (data) => {
                this.genders = data;
                this.updateInputConfigOptions('gender', this.genders);
            },
            error: (error) => {
                this.handleError(error);
            },
            complete: () => {
                this.loading = false;
            }
        });
    }

    private handleError(error: any) {
        const message = 'Ocurrió un error en el servicio, verifica tu conexión';
        this.toastService.presentToast(message);
        console.error('Error:', error);
    }

    matchingFields(field1: string, field2: string) {
        return (formGroup: FormGroup) => {
            const value1 = formGroup.controls[field1].value;
            const value2 = formGroup.controls[field2].value;

            if (value1 !== value2) {
                formGroup.controls[field2].setErrors({ notMatching: true });
            } else {
                formGroup.controls[field2].setErrors(null);
            }
        };
    }

    onSubmit() {
        this.formData.emit(this.registrationForm.value);
    }
}
