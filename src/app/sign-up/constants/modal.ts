import { IButton } from "src/app/shared/interfaces/button.interface";
import { IModal } from "src/app/shared/interfaces/modal.interface";

const MODAL_BTN: IButton = {
    id: "successBtn",
    text: "Continuar",
    color: "primary",
    disabled: false,
    type: "button",
};

export const MODAL_INFO_SUCCESS: IModal = {
    id: "successSignUp",
    title: "¡Bienvenido a Coink!",
    text: "¡Cuenta creada exitosamente, tu marrano ya está listo para que empieces a ahorrar!",
    iconSrc: "/assets/icons/logo.svg",
    buttonInfo: MODAL_BTN,
}