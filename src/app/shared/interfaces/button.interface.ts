export interface IButton {
    id: string;
    text: string;
    color: 'primary' | 'secondary';
    type: 'button' | 'submit';
    disabled?: boolean;
    loading?: boolean;
}
