import { IInputConfig } from "src/app/shared/interfaces/input-config.interface";
import { IButton } from "src/app/shared/interfaces/button.interface";

export const INPUTS_CONFIG_USER: IInputConfig[] = [
    {
        label: 'Tipo de documento',
        controlName: 'documentType',
        type: 'select',
        options: [],
        minLength: null,
        maxLength: null,
    },
    {
        label: 'Número de documento',
        controlName: 'documentNumber',
        type: 'number',
        minLength: 5,
        maxLength: 20,
        errorText: "Debe contener entre 5 y 20 dígitos",
    },
    {
        label: 'Fecha de expedición',
        controlName: 'documentIssueDate',
        type: 'date',
        minLength: null,
        maxLength: null,
    },
    {
        label: 'Fecha de nacimiento',
        controlName: 'birthDate',
        type: 'date',
        minLength: null,
        maxLength: null,
    },
    {
        label: 'Género',
        controlName: 'gender',
        type: 'select',
        options: [],
        minLength: null,
        maxLength: null,
    }
];

export const INPUTS_CONFIG_ACCOUNT: IInputConfig[] = [
    {
        label: 'Correo electrónico',
        controlName: 'email',
        type: 'text',
        minLength: null,
        maxLength: null,
        errorText: "Debe ser un correo electrónico válido",
    },
    {
        label: 'Confirmar correo electrónico',
        controlName: 'confirmEmail',
        type: 'text',
        minLength: null,
        maxLength: null,
        errorText: "Este campo no coincide con el correo electrónico",
    },
    {
        label: 'PIN de seguridad',
        controlName: 'pin',
        type: 'number',
        password: true,
        minLength: 4,
        maxLength: 4,
        errorText: "PIN debe ser de 4 dígitos",
    },
    {
        label: 'Confirmar PIN de seguridad',
        controlName: 'confirmPin',
        type: 'number',
        password: true,
        minLength: 4,
        maxLength: 4,
        errorText: "Este campo no coincide con el PIN",
    }
];

export const SUBMIT_BTN: IButton = {
    id: "submitSignUp",
    text: "Siguiente",
    color: "primary",
    disabled: true,
    type: "submit",
};

export const AGREEMENT_BTN: IButton = {
    id: "agreementBtn",
    text: "Aceptar",
    color: "primary",
    disabled: true,
    type: "button",
};