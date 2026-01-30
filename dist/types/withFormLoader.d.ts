import React from "react";
import { FieldValues } from "react-hook-form";
export declare function fetchDefaultValues<T extends FieldValues>(url: string): Promise<T>;
interface FormLoaderOptions {
    templateId?: string;
    retry?: boolean;
}
export declare const withFormLoader: <T extends FieldValues>(Form: React.ComponentType<{
    defaultValues: T;
} & any>, dataUrl: string, options?: FormLoaderOptions) => (props: any) => import("react/jsx-runtime").JSX.Element;
export {};
