import { Components, Helper, Types } from "gd-sprest-bs";
import { Base } from "gd-bs-vue/build/components/base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class ListEditForm extends Base<Components.IListFormEdit> {
  // Properties
  @Prop(Array) excludeFields: Array<string>;
  @Prop(String) groupClassName: string;
  @Prop(Array) includeFields: Array<string>;
  @Prop(Object) info: Helper.IListFormResult;
  @Prop(Function) onControlRendered: (control: Components.IFormControl, field: Types.SP.Field) => void | Promise<Components.IFormControl>;
  @Prop(Function) onControlRendering: (control: Components.IFormControlProps, field: Types.SP.Field) => void | Promise<Components.IFormControlProps>;
  @Prop(Function) onFilterLookupField: (field: Types.SP.Field) => string | Types.IODataQuery;
  @Prop(Function) onError: (msg?: string) => void;
  @Prop(Function) onSaving: (item: any) => void | PromiseLike<any>;
  @Prop(Function) onValidate: (field: Types.SP.Field, control: Components.IFormControl) => boolean;
  @Prop(String) rowClassName: string;
  @Prop(Object) template: Array<Components.IFormRow>;

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.ListForm.renderEditForm;
  }
}