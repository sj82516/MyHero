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
var forms_1 = require('@angular/forms');
var hero_model_1 = require("../../shared/hero.model");
var hero_service_1 = require('../../shared/hero.service');
require("rxjs/Rx");
require('rxjs/Rx');
var Subscription_1 = require("rxjs/Subscription");
var HeroFormComponent = (function () {
    function HeroFormComponent(formBuilder, heroService) {
        this.formBuilder = formBuilder;
        this.heroService = heroService;
        this.errors = {};
        this.errorMsgs = {};
        this.subscription = new Subscription_1.Subscription();
    }
    HeroFormComponent.prototype.ngOnInit = function () {
        this.myForm = this.formBuilder.group({
            'name': ['Hero', [forms_1.Validators.required, forms_1.Validators.minLength(4), this.exampleValidator]],
            'age': ['', [forms_1.Validators.required, forms_1.Validators.pattern('^[0-9]{1,3}$')]],
            'money': ['', [forms_1.Validators.required]],
            'imgUrl': ['', [forms_1.Validators.required]],
            'address': this.formBuilder.group({
                'country': ['', [forms_1.Validators.required, forms_1.Validators.pattern('^[a-zA-Z]+$')], [this.asyncValidator.bind(this)]],
                'city': ['', [forms_1.Validators.required, forms_1.Validators.pattern('^[a-zA-Z]+$')]]
            })
        });
        this.registerInputCheck();
    };
    HeroFormComponent.prototype.onSave = function (ev) {
        var _this = this;
        this.subscription = this.heroService.createHero(new hero_model_1.Hero(this.myForm.value.name, this.myForm.value.age, +this.myForm.value.money, this.myForm.value.imgUrl, this.myForm.value.address)).subscribe(function (data) {
            _this.heroService.heroList.push(new hero_model_1.Hero(_this.myForm.value.name, _this.myForm.value.age, +_this.myForm.value.money, _this.myForm.value.imgUrl, _this.myForm.value.address, data.name));
            console.log(data);
        });
    };
    //配置錯誤訊息
    HeroFormComponent.prototype.registerInputCheck = function () {
        this.errors['name'] = [
            { key: 'required', msg: '* name required!' },
            { key: 'minlength', msg: '* name is too short!' },
            { key: 'example', msg: '* name is example!' }
        ];
        this.errors['age'] = [
            { key: 'required', msg: '* age required!' },
            { key: 'pattern', msg: '* age format is invalid!' }
        ];
        this.errors['money'] = [
            { key: 'required', msg: '* money required!' }
        ];
        this.errors['imgUrl'] = [
            { key: 'required', msg: '* imgUrl required!' }
        ];
        this.errors['country'] = [
            { key: 'required', msg: '* country required!' },
            { key: 'pattern', msg: '* country format is invalid!' },
            { key: 'example', msg: '* country is example!' }
        ];
        this.errors['city'] = [
            { key: 'required', msg: '* city required!' },
            { key: 'pattern', msg: '* city format is invalid!' }
        ];
    };
    HeroFormComponent.prototype.handleInputError = function (control, outputElm) {
        if (!control.valid && this.errors[outputElm]) {
            for (var _i = 0, _a = this.errors[outputElm]; _i < _a.length; _i++) {
                var err = _a[_i];
                if (control.hasError(err.key)) {
                    this.errorMsgs[outputElm] = err.msg;
                }
            }
        }
    };
    HeroFormComponent.prototype.exampleValidator = function (control) {
        if (control.value == 'example') {
            return { 'example': true };
        }
        return null;
    };
    HeroFormComponent.prototype.asyncValidator = function (control) {
        var that = this;
        var promise = new Promise(function (resolve, reject) {
            var v = control.value;
            setTimeout(function () {
                if (v == 'example') {
                    control.setErrors({ 'example': 'example' });
                    that.handleInputError(control, 'country');
                    resolve({ 'example': true });
                }
                else {
                    resolve(null);
                }
            }, 1500);
        });
        return promise;
    };
    HeroFormComponent = __decorate([
        core_1.Component({
            selector: 'my-hero-form',
            templateUrl: './app/hero/hero-form/hero-form.html',
            styleUrls: ['./app/hero/hero-form/hero-form.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, hero_service_1.HeroService])
    ], HeroFormComponent);
    return HeroFormComponent;
}());
exports.HeroFormComponent = HeroFormComponent;
//# sourceMappingURL=hero-form.component.js.map