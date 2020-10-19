import Vue from "vue";
import { Components } from "gd-sprest-bs";
import Base from "gd-bs-vue/src/components/base.vue";

export const ListDisplayForm = Vue.extend({
  name: "ListDisplayForm",
  extends: Base,
  data: () => ({
    bs: Components.ListForm.renderDisplayForm
  }),
  props: {
    excludeFields: { type: Array },
    groupClassName: { type: String },
    includeFields: { type: Array },
    info: { type: Object },
    onControlRendered: { type: Function },
    onControlRendering: { type: Function },
    onError: { type: Function },
    rowClassName: { type: String },
    template: { type: Object }
  }
});