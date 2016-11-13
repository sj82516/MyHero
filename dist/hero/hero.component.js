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
var hero_service_1 = require('../shared/hero.service');
var router_1 = require("@angular/router");
require('rxjs/Rx');
var hero_form_component_1 = require("./hero-form/hero-form.component");
var core_2 = require("@angular/core");
var HeroComponent = (function () {
    function HeroComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
    }
    HeroComponent.prototype.ngOnInit = function () {
        this.heros = this.heroService.getHeros();
    };
    HeroComponent.prototype.navToHeroDetail = function (id) {
        this.router.navigate(['/main/hero/detail'], { queryParams: { 'id': id } });
    };
    HeroComponent.prototype.canDeactivate = function () {
        if (this.heroFormComponent.myForm.valid || this.heroFormComponent.myForm.pristine) {
            return true;
        }
        return confirm("Form is not completed, Are you sure to leave?");
    };
    __decorate([
        core_2.ViewChild(hero_form_component_1.HeroFormComponent), 
        __metadata('design:type', hero_form_component_1.HeroFormComponent)
    ], HeroComponent.prototype, "heroFormComponent", void 0);
    HeroComponent = __decorate([
        core_1.Component({
            selector: 'my-hero',
            templateUrl: './app/hero/hero.html',
            styleUrls: ['./app/hero/hero.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
    ], HeroComponent);
    return HeroComponent;
}());
exports.HeroComponent = HeroComponent;
//# sourceMappingURL=hero.component.js.map