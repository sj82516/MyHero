import { Component } from '@angular/core';
import {Task} from "../shared/task.model";
import {Hero} from "../shared/hero.model";
import { HeroService }  from '../shared/hero.service';
import { TaskService }  from '../shared/task.service';


@Component({
    selector:'my-manage',
    templateUrl:'./app/manage/manage.html',
    styleUrls:['./app/manage/manage.css']
})
export class ManageComponent{
    private heroList:Array<Hero> = new Array<Hero>();
    private taskList:Array<Task> = new Array<Task>();
    constructor(private heroService:HeroService, private taskService:TaskService){
        this.heroList = this.heroService.heroList;
        this.taskList = this.taskService.getTasks();
        console.log(this.heroList);
    }
    values(obj) : Array<string> {
        return Object.values(obj);
    }
    dragOverHandler(ev){
        ev.preventDefault();
    }
    dropHandler(ev,id){
        ev.preventDefault();
        //讓Todo item的tag與tagService連動
        let h = JSON.parse(ev.dataTransfer.getData('text/plain'));
        this.taskList[id].addNewHero(h);
        this.heroService.getHeroById(h.id).addNewTask(this.taskList[id]);
        console.log(this.taskList[id].heroList);
    }
    dragStartHandler(ev, h){
        ev.dataTransfer.dropEffect = 'copy';
        ev.dataTransfer.effectAllowe = 'copy';
        ev.dataTransfer.setData('text/plain',  JSON.stringify(h));
    }

    deleteHero(tId, hId){
        delete this.taskList[tId].heroList[hId];
        delete this.heroService.getHeroById(hId).taskList[tId];
    }
}
