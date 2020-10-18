import { Components, Types } from "gd-sprest-bs";
import { Base } from "gd-bs-vue/build/components/base";
export declare class ListFormDialog extends Base<Components.IListFormDialog> {
    actions: Components.IToolbarProps;
    contentType: string;
    controlMode: number;
    excludeFields: Array<string>;
    fields: Array<string>;
    item: any;
    itemId: number;
    listName: string;
    loadAttachments: boolean;
    modalProps: Components.IModalProps;
    onControlRendered: (control: Components.IFormControl) => void | Promise<Components.IFormControl>;
    onControlRendering: (control: Components.IFormControlProps) => void | Promise<Components.IFormControlProps>;
    onSaving: (item: any) => void | PromiseLike<any>;
    onSaved: (item: any) => void;
    query: Types.IODataQuery;
    template: Array<Components.IFormRow>;
    visible: boolean;
    webUrl: {
        type: String;
    };
    constructor();
}
