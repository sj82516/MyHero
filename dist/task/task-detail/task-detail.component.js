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
var Subscription_1 = require("rxjs/Subscription");
var router_1 = require("@angular/router");
var task_service_1 = require('../../shared/task.service');
var TaskDetailComponent = (function () {
    function TaskDetailComponent(activatedRoute, router, taskService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.taskService = taskService;
        this.subscribe = new Subscription_1.Subscription();
    }
    TaskDetailComponent.prototype.onClick = function () {
        this.router.navigate(['/main/task']);
    };
    TaskDetailComponent.prototype.values = function (obj) {
        return Object.values(obj);
    };
    TaskDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscribe = this.activatedRoute.params.subscribe(function (params) {
            console.log(params['id']);
            if (_this.taskService.getTaskById(params['id']) != null) {
                _this.selectedTask = _this.taskService.getTaskById(params['id']);
            }
        });
    };
    TaskDetailComponent.prototype.ngOnDestroy = function () {
        this.subscribe.unsubscribe();
    };
    TaskDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-task-detail',
            templateUrl: './app/task/task-detail/task-detail.html',
            styleUrls: ['./app/task/task-detail/task-detail.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, task_service_1.TaskService])
    ], TaskDetailComponent);
    return TaskDetailComponent;
}());
exports.TaskDetailComponent = TaskDetailComponent;
//# sourceMappingURL=task-detail.component.js.map