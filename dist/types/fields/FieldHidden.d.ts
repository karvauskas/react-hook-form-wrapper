import { ComponentProps } from "react";
interface FieldProps extends Omit<ComponentProps<'input'>, 'name' | 'type'> {
    name: string;
}
export declare const FieldHidden: ({ name, ...rest }: FieldProps) => import("react/jsx-runtime").JSX.Element;
export {};
