"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var account_component_1 = require('./account/account.component');
var hero_service_1 = require('./shared/hero.service');
var task_service_1 = require('./shared/task.service');
var user_service_1 = require('./shared/user.service');
var http_1 = require("@angular/http");
var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.ReactiveFormsModule, forms_1.FormsModule, http_1.HttpModule],
            declarations: [account_component_1.AccountComponent],
            providers: [hero_service_1.HeroService, task_service_1.TaskService, user_service_1.UserService, user_service_1.UserCanLoadGuard, user_service_1.UserCanDeactivateGuard],
            exports: [account_component_1.AccountComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map