<template></template>

<script>
import { Components } from "gd-sprest-bs";
import Base from "./base";

export default {
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
    value: { type: String | Number | Object }
  }
};
</script>