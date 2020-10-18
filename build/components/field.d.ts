import { Components, Types } from "gd-sprest-bs";
import { Base } from "gd-bs-vue/build/components/base";
export declare class Field extends Base<Components.IField> {
    controlMode: number;
    errorMessage: string;
    field: Types.SP.Field;
    listInfo: string;
    onError: (msg: string) => void;
    onControlRendered: (control: Components.IFormControl, field: Types.SP.Field) => void | Promise<Components.IFormControl>;
    onControlRendering: (control: Components.IFormControlProps, field: Types.SP.Field) => void | Promise<Components.IFormControlProps>;
    onValidate: (field: Types.SP.Field, control: Components.IFormControl, value: Components.IFormControlValidationResult) => boolean | Components.IFormControlValidationResult;
    value: any;
    constructor();
}
