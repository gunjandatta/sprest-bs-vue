import { Components, Types } from "gd-sprest-bs";
import { Base } from "gd-bs-vue/build/components/base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class ListFormDialog extends Base<Components.IListFormDialog> {
  // Properties
  @Prop(Object) actions: Components.IToolbarProps;
  @Prop(String) contentType: string;
  @Prop(Number) controlMode: number;
  @Prop(Array) excludeFields: Array<string>;
  @Prop(Array) fields: Array<string>;
  @Prop(Object) item: any;
  @Prop(Number) itemId: number;
  @Prop(String) listName: string;
  @Prop(Boolean) loadAttachments: boolean;
  @Prop(Object) modalProps: Components.IModalProps;
  @Prop(Function) onControlRendered: (control: Components.IFormControl) => void | Promise<Components.IFormControl>;
  @Prop(Function) onControlRendering: (control: Components.IFormControlProps) => void | Promise<Components.IFormControlProps>;
  @Prop(Function) onSaving: (item: any) => void | PromiseLike<any>;
  @Prop(Function) onSaved: (item: any) => void;
  @Prop(Object) query: Types.IODataQuery;
  @Prop(Array) template: Array<Components.IFormRow>;
  @Prop(Boolean) visible: boolean;
  @Prop(String) webUrl: { type: String }

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.ListFormDialog;
  }
}