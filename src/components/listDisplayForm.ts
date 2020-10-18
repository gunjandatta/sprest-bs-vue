import { Components, Helper, Types } from "gd-sprest-bs";
import { Base } from "gd-bs-vue/build/components/base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class ListDisplayForm extends Base<Components.IListFormDisplay> {
  // Properties
  @Prop(Array) excludeFields: Array<string>;
  @Prop(String) groupClassName: string;
  @Prop(Array) includeFields: Array<string>;
  @Prop(Object) info: Helper.IListFormResult;
  @Prop(Function) onControlRendered: (control: Components.IFormControl, field: Types.SP.Field) => void | Promise<Components.IFormControl>;
  @Prop(Function) onControlRendering: (control: Components.IFormControlProps, field: Types.SP.Field) => void | Promise<Components.IFormControlProps>;
  @Prop(Function) onError: (msg?: string) => void;
  @Prop(String) rowClassName: string;
  @Prop(Object) template: Array<Components.IFormRow>;

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.ListForm.renderDisplayForm;
  }
}