import { IButton } from "./button.interface";

export interface IModal {
    id: string;
    title: string;
    text: string;
    iconSrc: string;
    buttonInfo: IButton;
}
