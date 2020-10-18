import { Components, Helper, Types } from "gd-sprest-bs";
import { Base } from "gd-bs-vue/build/components/base";
export declare class ListDisplayForm extends Base<Components.IListFormDisplay> {
    excludeFields: Array<string>;
    groupClassName: string;
    includeFields: Array<string>;
    info: Helper.IListFormResult;
    onControlRendered: (control: Components.IFormControl, field: Types.SP.Field) => void | Promise<Components.IFormControl>;
    onControlRendering: (control: Components.IFormControlProps, field: Types.SP.Field) => void | Promise<Components.IFormControlProps>;
    onError: (msg?: string) => void;
    rowClassName: string;
    template: Array<Components.IFormRow>;
    constructor();
}
