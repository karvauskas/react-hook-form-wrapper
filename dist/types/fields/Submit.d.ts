import { ComponentProps } from "react";
interface SubmitProps extends Omit<ComponentProps<'button'>, 'type'> {
    label?: string;
}
export declare const Submit: ({ label, ...rest }: SubmitProps) => import("react/jsx-runtime").JSX.Element;
export {};
