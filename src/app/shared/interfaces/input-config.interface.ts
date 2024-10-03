export interface IInputConfig {
    label: string;
    controlName: string;
    type: 'text' | 'select' | 'number' | 'date';
    errorText?: string;
    password?: boolean;
    minLength: number | null;
    maxLength: number | null;
    options?: IOption[];
}

interface IOption {
    id: string | number;
    name: string;
}