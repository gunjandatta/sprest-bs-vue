import Vue from "vue";
import { Components } from "gd-sprest-bs";
import { Base } from "gd-bs-vue/src/components/base";

export const ListDisplayForm = Vue.extend({
  name: "ListDisplayForm",
  extends: Base,
  data: () => ({
    bs: Components.ListForm.renderDisplayForm
  }),
  props: {
    excludeFields: { type: Array },
    includeFields: { type: Array },
    info: { type: Object },
    onControlRendered: { type: Function },
    onControlRendering: { type: Function },
    onError: { type: Function },
    template: { type: Object }
  }
});