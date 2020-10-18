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
exports.DateTime = void 0;
var gd_sprest_bs_1 = require("gd-sprest-bs");
var base_1 = require("gd-bs-vue/build/components/base");
var vue_property_decorator_1 = require("vue-property-decorator");
var DateTime = /** @class */ (function (_super) {
    __extends(DateTime, _super);
    // Constructor
    function DateTime() {
        var _this = _super.call(this) || this;
        // Set the bs component
        _this._bs = gd_sprest_bs_1.Components.DateTime;
        return _this;
    }
    __decorate([
        vue_property_decorator_1.Prop(Boolean)
    ], DateTime.prototype, "disabled", void 0);
    __decorate([
        vue_property_decorator_1.Prop(String)
    ], DateTime.prototype, "label", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Object)
    ], DateTime.prototype, "options", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Boolean)
    ], DateTime.prototype, "showTime", void 0);
    __decorate([
        vue_property_decorator_1.Prop(String)
    ], DateTime.prototype, "value", void 0);
    DateTime = __decorate([
        vue_property_decorator_1.Component
    ], DateTime);
    return DateTime;
}(base_1.Base));
exports.DateTime = DateTime;
