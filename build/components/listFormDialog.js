"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListFormDialog = void 0;
var gd_sprest_bs_1 = require("gd-sprest-bs");
var base_1 = require("gd-bs-vue/build/components/base");
var vue_property_decorator_1 = require("vue-property-decorator");
var ListFormDialog = /** @class */ (function (_super) {
    __extends(ListFormDialog, _super);
    // Constructor
    function ListFormDialog() {
        var _this = _super.call(this) || this;
        // Set the bs component
        _this._bs = gd_sprest_bs_1.Components.ListFormDialog;
        return _this;
    }
    __decorate([
        vue_property_decorator_1.Prop(Object)
    ], ListFormDialog.prototype, "actions", void 0);
    __decorate([
        vue_property_decorator_1.Prop(String)
    ], ListFormDialog.prototype, "contentType", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Number)
    ], ListFormDialog.prototype, "controlMode", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Array)
    ], ListFormDialog.prototype, "excludeFields", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Array)
    ], ListFormDialog.prototype, "fields", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Object)
    ], ListFormDialog.prototype, "item", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Number)
    ], ListFormDialog.prototype, "itemId", void 0);
    __decorate([
        vue_property_decorator_1.Prop(String)
    ], ListFormDialog.prototype, "listName", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Boolean)
    ], ListFormDialog.prototype, "loadAttachments", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Object)
    ], ListFormDialog.prototype, "modalProps", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Function)
    ], ListFormDialog.prototype, "onControlRendered", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Function)
    ], ListFormDialog.prototype, "onControlRendering", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Function)
    ], ListFormDialog.prototype, "onSaving", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Function)
    ], ListFormDialog.prototype, "onSaved", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Object)
    ], ListFormDialog.prototype, "query", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Array)
    ], ListFormDialog.prototype, "template", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Boolean)
    ], ListFormDialog.prototype, "visible", void 0);
    __decorate([
        vue_property_decorator_1.Prop(String)
    ], ListFormDialog.prototype, "webUrl", void 0);
    ListFormDialog = __decorate([
        vue_property_decorator_1.Component
    ], ListFormDialog);
    return ListFormDialog;
}(base_1.Base));
exports.ListFormDialog = ListFormDialog;
