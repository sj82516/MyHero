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
var task_model_1 = require("../../shared/task.model");
var task_service_1 = require('../../shared/task.service');
var TaskFormComponent = (function () {
    function TaskFormComponent(formBuilder, taskService) {
        this.formBuilder = formBuilder;
        this.taskService = taskService;
        this.errors = {};
        this.errorMsgs = {};
    }
    TaskFormComponent.prototype.ngOnInit = function () {
        this.myForm = this.formBuilder.group({
            'title': ['Task', [forms_1.Validators.required, forms_1.Validators.minLength(4), this.exampleValidator]],
            'description': ['', [forms_1.Validators.required, forms_1.Validators.maxLength(40)]],
            'payment': ['', [forms_1.Validators.required]]
        });
        this.registerInputCheck();
    };
    TaskFormComponent.prototype.onSave = function (ev) {
        this.taskService.createTask(new task_model_1.Task(this.myForm.value.title, this.myForm.value.description, +this.myForm.value.payment));
    };
    //配置錯誤訊息
    TaskFormComponent.prototype.registerInputCheck = function () {
        this.errors['title'] = [
            { key: 'required', msg: '* name required!' },
            { key: 'minlength', msg: '* name is too short!' },
            { key: 'example', msg: '* name is example!' }
        ];
        this.errors['description'] = [
            { key: 'required', msg: '* description required!' },
            { key: 'maxlength', msg: '* description is to long!' }
        ];
        this.errors['payment'] = [
            { key: 'required', msg: '* payment required!' }
        ];
    };
    TaskFormComponent.prototype.handleInputError = function (control, outputElm) {
        if (!control.valid && this.errors[outputElm]) {
            for (var _i = 0, _a = this.errors[outputElm]; _i < _a.length; _i++) {
                var err = _a[_i];
                if (control.hasError(err.key)) {
                    this.errorMsgs[outputElm] = err.msg;
                }
            }
        }
    };
    TaskFormComponent.prototype.exampleValidator = function (control) {
        if (control.value == 'example') {
            return { 'example': true };
        }
        return null;
    };
    TaskFormComponent.prototype.asyncValidator = function (control) {
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
    TaskFormComponent = __decorate([
        core_1.Component({
            selector: 'my-task-form',
            templateUrl: './app/task/task-form/task-form.html',
            styleUrls: ['./app/task/task-form/task-form.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, task_service_1.TaskService])
    ], TaskFormComponent);
    return TaskFormComponent;
}());
exports.TaskFormComponent = TaskFormComponent;
//# sourceMappingURL=task-form.component.js.map