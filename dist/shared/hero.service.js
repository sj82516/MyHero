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
var hero_model_1 = require("./hero.model");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Subscription_1 = require("rxjs/Subscription");
var HeroService = (function () {
    function HeroService(http) {
        var _this = this;
        this.http = http;
        this.heroList = [];
        this.subscription = new Subscription_1.Subscription();
        this.dbURL = "https://test2-25905.firebaseio.com/heros.json";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
        console.log("Hero service start");
        this.subscription = this.getHerosHttp().subscribe(function (data) {
            for (var i in data) {
                data[i].id = i;
                _this.heroList.push(new hero_model_1.Hero(data[i].name, data[i].age, data[i].money, data[i].imgUrl, data[i].address, data[i].id));
                console.log(_this.heroList[0].taskList);
            }
        }, function (err) {
            console.error("Get Heros Err: " + err);
        });
    }
    HeroService.prototype.getHerosHttp = function () {
        return this.http.get(this.dbURL, this.options).map(function (res) {
            var body = res.json();
            return body || {};
        });
    };
    HeroService.prototype.getHeros = function () {
        return this.heroList;
    };
    HeroService.prototype.getHeroById = function (id) {
        for (var _i = 0, _a = this.heroList; _i < _a.length; _i++) {
            var h = _a[_i];
            if (id == h.id) {
                return h;
            }
        }
        return null;
    };
    HeroService.prototype.createHero = function (newHero) {
        return this.http.post(this.dbURL, JSON.stringify(newHero), this.options).map(function (res) {
            var body = res.json();
            return body || {};
        });
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map