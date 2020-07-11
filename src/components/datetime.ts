import Vue from "vue";
import { Components } from "gd-sprest-bs";
import { Base } from "gd-bs-vue/src/components/base";

export const DateTime = Vue.extend({
  name: "DateTime",
  extends: Base,
  data: () => ({
    bs: Components.DateTime
  }),
  props: {
    disabled: { type: Boolean },
    label: { type: String },
    options: { type: Object },
    showTime: { type: Boolean },
    value: { type: String }
  }
});