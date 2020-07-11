import Vue from "vue";
import { Components } from "gd-sprest-bs";
import Base from "gd-bs-vue/src/components/base.vue";

export const PeoplePicker = Vue.extend({
  name: "PeoplePicker",
  extends: Base,
  data: () => ({
    bs: Components.PeoplePicker
  }),
  props: {
    allowGroups: { type: Boolean },
    label: { type: String },
    multi: { type: Boolean },
    placeholder: { type: String },
    readOnly: { type: Boolean },
    searchLocal: { type: Boolean },
    value: { type: Object }
  }
});