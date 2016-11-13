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
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var user_service_1 = require("../shared/user.service");
var AccountComponent = (function () {
    function AccountComponent(formBuilder, userService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.errors = {};
        this.errorMsgs = {};
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.myForm = this.formBuilder.group({
            'account': ['', [forms_1.Validators.required, forms_1.Validators.minLength(4)]],
            'password': ['', [forms_1.Validators.required, forms_1.Validators.maxLength(10)]],
        });
        this.registerInputCheck();
    };
    AccountComponent.prototype.onSave = function (ev) {
        if (this.myForm.value['account'] == 'root') {
            this.userService.loginUser = { account: this.myForm.value['account'], password: this.myForm.value['password'] };
            this.router.navigate(['/main']);
        }
    };
    //配置錯誤訊息
    AccountComponent.prototype.registerInputCheck = function () {
        this.errors['account'] = [
            { key: 'required', msg: '* account required!' },
            { key: 'minlength', msg: '* account is too short!' },
        ];
        this.errors['password'] = [
            { key: 'required', msg: '* password required!' },
            { key: 'maxlength', msg: '* password is to long!' }
        ];
    };
    AccountComponent.prototype.handleInputError = function (control, outputElm) {
        if (!control.valid && this.errors[outputElm]) {
            for (var _i = 0, _a = this.errors[outputElm]; _i < _a.length; _i++) {
                var err = _a[_i];
                if (control.hasError(err.key)) {
                    this.errorMsgs[outputElm] = err.msg;
                }
            }
        }
    };
    AccountComponent = __decorate([
        core_1.Component({
            selector: 'my-account',
            templateUrl: './app/account/account.html',
            styleUrls: ['./app/account/account.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, user_service_1.UserService, router_1.Router])
    ], AccountComponent);
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;
//# sourceMappingURL=account.component.js.map