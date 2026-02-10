import { ComponentProps } from "react";
interface SubmitProps extends Omit<ComponentProps<'button'>, 'type'> {
    label?: string;
    autoHide?: boolean;
}
export declare const Submit: import("react").MemoExoticComponent<({ label, autoHide, ...rest }: SubmitProps) => import("react/jsx-runtime").JSX.Element | null>;
export {};
