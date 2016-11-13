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
var core_1 = require("@angular/core");
var TaskService = (function () {
    function TaskService() {
        this.taskList = new Array();
        this.taskId = 0;
    }
    TaskService.prototype.getTasks = function () {
        return this.taskList;
    };
    TaskService.prototype.getTaskById = function (id) {
        for (var _i = 0, _a = this.taskList; _i < _a.length; _i++) {
            var t = _a[_i];
            if (t.id == id) {
                return t;
            }
        }
        return null;
    };
    TaskService.prototype.createTask = function (newTask) {
        newTask.id = this.taskId++;
        console.log(newTask);
        this.taskList.push(newTask);
    };
    TaskService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map