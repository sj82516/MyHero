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
var shared_module_1 = require('../shared/shared.module');
var main_component_1 = require("./main.component");
var hero_module_1 = require('../hero/hero.module');
var task_module_1 = require('../task/task.module');
var manage_component_1 = require('../manage/manage.component');
var nav_component_1 = require('../nav/nav.component');
var main_routes_1 = require('./main.routes');
var MainModule = (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        core_1.NgModule({
            imports: [main_routes_1.routing, hero_module_1.HeroModule, task_module_1.TaskModule, shared_module_1.SharedModule],
            declarations: [main_component_1.MainComponent, manage_component_1.ManageComponent, nav_component_1.NavComponent],
            exports: [main_component_1.MainComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MainModule);
    return MainModule;
}());
exports.MainModule = MainModule;
//# sourceMappingURL=main.module.js.map