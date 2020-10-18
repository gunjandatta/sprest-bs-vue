import { Components, Types } from "gd-sprest-bs";
import { Base } from "gd-bs-vue/build/components/base";
export declare class PeoplePicker extends Base<Components.IPeoplePicker> {
    allowGroups: boolean;
    label: string;
    multi: boolean;
    placeholder: string;
    readOnly: boolean;
    searchLocal: boolean;
    value: string | number | Types.IPeoplePickerUser | Array<string | number | Types.IPeoplePickerUser>;
    constructor();
}
