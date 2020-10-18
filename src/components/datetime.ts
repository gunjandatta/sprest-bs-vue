import { Components } from "gd-sprest-bs";
import { Base } from "gd-bs-vue/build/components/base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class DateTime extends Base<Components.IDateTime> {
  // Properties
  @Prop(Boolean) disabled: boolean;
  @Prop(String) label: string;
  @Prop(Object) options: any;
  @Prop(Boolean) showTime: boolean;
  @Prop(String) value: string;

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.DateTime;
  }
}