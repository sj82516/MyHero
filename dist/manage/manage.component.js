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
var task_service_1 = require('../shared/task.service');
var ManageComponent = (function () {
    function ManageComponent(heroService, taskService) {
        this.heroService = heroService;
        this.taskService = taskService;
        this.heroList = new Array();
        this.taskList = new Array();
        this.heroList = this.heroService.heroList;
        this.taskList = this.taskService.getTasks();
        console.log(this.heroList);
    }
    ManageComponent.prototype.values = function (obj) {
        return Object.values(obj);
    };
    ManageComponent.prototype.dragOverHandler = function (ev) {
        ev.preventDefault();
    };
    ManageComponent.prototype.dropHandler = function (ev, id) {
        ev.preventDefault();
        //讓Todo item的tag與tagService連動
        var h = JSON.parse(ev.dataTransfer.getData('text/plain'));
        this.taskList[id].addNewHero(h);
        this.heroService.getHeroById(h.id).addNewTask(this.taskList[id]);
        console.log(this.taskList[id].heroList);
    };
    ManageComponent.prototype.dragStartHandler = function (ev, h) {
        ev.dataTransfer.dropEffect = 'copy';
        ev.dataTransfer.effectAllowe = 'copy';
        ev.dataTransfer.setData('text/plain', JSON.stringify(h));
    };
    ManageComponent.prototype.deleteHero = function (tId, hId) {
        delete this.taskList[tId].heroList[hId];
        delete this.heroService.getHeroById(hId).taskList[tId];
    };
    ManageComponent = __decorate([
        core_1.Component({
            selector: 'my-manage',
            templateUrl: './app/manage/manage.html',
            styleUrls: ['./app/manage/manage.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, task_service_1.TaskService])
    ], ManageComponent);
    return ManageComponent;
}());
exports.ManageComponent = ManageComponent;
//# sourceMappingURL=manage.component.js.map