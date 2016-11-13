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
var hero_service_1 = require('../../shared/hero.service');
var router_1 = require("@angular/router");
var Subscription_1 = require("rxjs/Subscription");
var HeroDetailComponent = (function () {
    function HeroDetailComponent(activatedRoute, router, heroService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.heroService = heroService;
        this.subscribe = new Subscription_1.Subscription();
    }
    HeroDetailComponent.prototype.values = function (obj) {
        return Object.values(obj);
    };
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscribe = this.activatedRoute.queryParams.subscribe(function (queryParams) {
            console.log('in detail:' + queryParams['id']);
            if (_this.heroService.getHeroById(queryParams['id']) != null) {
                _this.selectedHero = _this.heroService.getHeroById(queryParams['id']);
                console.log(_this.selectedHero);
            }
        });
    };
    HeroDetailComponent.prototype.ngOnDestroy = function () {
        this.subscribe.unsubscribe();
    };
    HeroDetailComponent.prototype.onClick = function () {
        this.router.navigate(['/main/hero']);
    };
    HeroDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-hero-detail',
            templateUrl: './app/hero/hero-detail/hero-detail.html',
            styleUrls: ['./app/hero/hero-detail/hero-detail.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, hero_service_1.HeroService])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map