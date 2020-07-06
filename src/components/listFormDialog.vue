<template></template>

<script>
import { Components } from "gd-sprest-bs";
import Base from "./base";

export default {
  name: "ListFormDialog",
  extends: Base,
  data: () => ({
    bs: Components.ListFormDialog
  }),
  props: {
    actions: { type: Object },
    contentType: { type: String },
    controlMode: { type: Number },
    excludeFields: { type: Array },
    fields: { type: Array },
    item: { type: Object },
    itemId: { type: Number },
    listName: { type: String },
    loadAttachments: { type: Boolean },
    modalProps: { type: Object },
    onControlRendered: { type: Function },
    onControlRendering: { type: Function },
    onSaving: { type: Function },
    onSaved: { type: Function },
    query: { type: Object },
    template: { type: Array },
    visible: { type: Boolean },
    webUrl: { type: String }
  }
};
</script>