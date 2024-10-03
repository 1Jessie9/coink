import { IInfoDescription } from "src/app/shared/interfaces/info-description.interface";

export const NUMBER_PHONE_DESCRIPTION: IInfoDescription = {
    id: "phoneNumberDescription",
    text: "Para comenzar, por favor ingresa <b>tu número celular</b>.",
    iconSrc: "/assets/icons/logo.svg",
};

export const ACCOUNT_DETAILS_DESCRIPTION: IInfoDescription = {
    id: "accountDetailsDescription",
    title: "¿Cuáles son tus datos?",
    text: "Ahora necesitamos saber algunos datos tuyos.",
    iconSrc: "/assets/icons/logo.svg",
};

export const AGREEMENT_DESCRIPTION: IInfoDescription = {
    id: "agreementDescription",
    title: "Estás muy cerca de ser parte de coink",
    text: "Solo es necesario que leas detenidamente el contrato que se encuentra al final de la pantalla y lo aceptes.",
    iconSrc: "/assets/icons/coink-security.svg",
};