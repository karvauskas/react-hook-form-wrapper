import { Path, UseFormProps } from "react-hook-form";
import z from "zod";
import { ComponentProps, ComponentType } from "react";
type Specification<T extends z.ZodType = z.ZodType> = {
    type: 'spec';
    schema: T;
    defaultValue: z.input<T>;
};
type SchemaShape = {
    [key: string]: Specification | SchemaShape;
};
type ExtractZodSchema<T> = T extends Specification<infer U> ? U : T extends SchemaShape ? z.ZodObject<{
    [K in keyof T]: ExtractZodSchema<T[K]>;
}> : never;
export declare function createSchema<T extends SchemaShape>(fields: T, refine?: (schema: z.ZodObject<{
    [K in keyof T]: ExtractZodSchema<T[K]>;
}>) => z.ZodType): {
    schema: ExtractZodSchema<T>;
    defaultValues: z.input<ExtractZodSchema<T>>;
};
export declare const createForm: <T extends z.ZodObject>(schema: {
    schema: T;
    defaultValues: z.input<T>;
}, options?: Omit<UseFormProps<z.input<T>, any, z.output<T>>, "resolver">) => {
    form: import("react-hook-form").UseFormReturn<z.core.input<T>, any, z.core.output<T>>;
    attach: <C extends ComponentType<any> = ComponentType<any>>(name: Path<z.input<T>>, params?: Omit<ComponentProps<C>, "name">) => {
        name: Path<z.core.input<T>>;
    };
};
export declare const spec: {
    string: <T extends z.ZodType<any, any, any>>(zodSchema?: T, defaultValue?: any) => {
        type: "spec";
        schema: z.ZodPipe<z.ZodPipe<z.ZodTransform<string | undefined, unknown>, z.ZodUnion<readonly [z.ZodString, z.ZodUndefined]>>, T>;
        defaultValue: any;
    };
    number: <T extends z.ZodType<any, any, any>>(zodSchema?: T, defaultValue?: any) => {
        type: "spec";
        schema: z.ZodPipe<z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodUnion<readonly [z.ZodNumber, z.ZodUndefined]>>, T>;
        defaultValue: any;
    };
    custom: <T extends z.ZodTypeAny>(zodSchema: T, defaultValue?: any) => {
        type: "spec";
        schema: T;
        defaultValue: any;
    };
};
export {};
