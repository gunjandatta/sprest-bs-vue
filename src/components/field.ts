import { Components, Types } from "gd-sprest-bs";
import { Base } from "gd-bs-vue/build/components/base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class Field extends Base<Components.IField> {
  // Properties
  @Prop(Number) controlMode: number;
  @Prop(String) errorMessage: string;
  @Prop(Object) field: Types.SP.Field;
  @Prop(String) listInfo: string;
  @Prop(Function) onError: (msg: string) => void;
  @Prop(Function) onControlRendered: (control: Components.IFormControl, field: Types.SP.Field) => void | Promise<Components.IFormControl>;
  @Prop(Function) onControlRendering: (control: Components.IFormControlProps, field: Types.SP.Field) => void | Promise<Components.IFormControlProps>;
  @Prop(Function) onValidate: (field: Types.SP.Field, control: Components.IFormControl, value: Components.IFormControlValidationResult) => boolean | Components.IFormControlValidationResult;
  @Prop(Object) value: any;

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.Field;
  }
}