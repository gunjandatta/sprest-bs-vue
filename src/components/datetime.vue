<template></template>

<script>
import { Components } from "gd-sprest-bs";
import Base from "./base";

export default {
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
};
</script>