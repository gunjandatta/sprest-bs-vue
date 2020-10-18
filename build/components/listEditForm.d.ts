import { Components, Helper, Types } from "gd-sprest-bs";
import { Base } from "gd-bs-vue/build/components/base";
export declare class ListEditForm extends Base<Components.IListFormEdit> {
    excludeFields: Array<string>;
    groupClassName: string;
    includeFields: Array<string>;
    info: Helper.IListFormResult;
    onControlRendered: (control: Components.IFormControl, field: Types.SP.Field) => void | Promise<Components.IFormControl>;
    onControlRendering: (control: Components.IFormControlProps, field: Types.SP.Field) => void | Promise<Components.IFormControlProps>;
    onFilterLookupField: (field: Types.SP.Field) => string | Types.IODataQuery;
    onError: (msg?: string) => void;
    onSaving: (item: any) => void | PromiseLike<any>;
    onValidate: (field: Types.SP.Field, control: Components.IFormControl) => boolean;
    rowClassName: string;
    template: Array<Components.IFormRow>;
    constructor();
}
