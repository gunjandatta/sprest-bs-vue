import Vue from "vue";
import { Components } from "gd-sprest-bs";
import Base from "gd-bs-vue/src/components/base.vue";

export const ListEditForm = Vue.extend({
  name: "ListEditForm",
  extends: Base,
  data: () => ({
    bs: Components.ListForm.renderEditForm
  }),
  props: {
    controlMode: { type: Number },
    excludeFields: { type: Array },
    groupClassName: { type: String },
    includeFields: { type: Array },
    info: { type: Object },
    onControlRendered: { type: Function },
    onControlRendering: { type: Function },
    onFilterLookupField: { type: Function },
    onError: { type: Function },
    onSaving: { type: Function },
    onValidate: { type: Function },
    rowClassName: { type: String },
    template: { type: Object }
  }
});