import { Components, Types } from "gd-sprest-bs";
import { Base } from "gd-bs-vue/build/components/base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class PeoplePicker extends Base<Components.IPeoplePicker> {
  // Properties
  @Prop(Boolean) allowGroups: boolean;
  @Prop(String) label: string;
  @Prop(Boolean) multi: boolean;
  @Prop(String) placeholder: string;
  @Prop(Boolean) readOnly: boolean;
  @Prop(Boolean) searchLocal: boolean;
  @Prop(Object) value: string | number | Types.IPeoplePickerUser | Array<string | number | Types.IPeoplePickerUser>;;

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.PeoplePicker;
  }
}