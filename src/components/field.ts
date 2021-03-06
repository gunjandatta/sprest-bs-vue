import Vue from "vue";
import { Components } from "gd-sprest-bs";
import Base from "gd-bs-vue/src/components/base.vue";

export const Field = Vue.extend({
  name: "Field",
  extends: Base,
  data: () => ({
    bs: Components.Field
  }),
  props: {
    controlMode: { type: Number },
    errorMessage: { type: String },
    field: { type: Object },
    listInfo: { type: String },
    onError: { type: Function },
    onControlRendered: { type: Function },
    onControlRendering: { type: Function },
    onValidate: { type: Function },
    value: { type: Object }
  }
});