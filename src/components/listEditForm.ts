import Vue from "vue";
import { Components } from "gd-sprest-bs";
import { Base } from "gd-bs-vue/src/components/base";

export const ListEditForm = Vue.extend({
  name: "ListEditForm",
  extends: Base,
  data: () => ({
    bs: Components.ListForm.renderEditForm
  }),
  props: {
    excludeFields: { type: Array },
    includeFields: { type: Array },
    info: { type: Object },
    onControlRendered: { type: Function },
    onControlRendering: { type: Function },
    onError: { type: Function },
    onSaving: { type: Function },
    onValidate: { type: Function },
    template: { type: Object }
  }
});