import { Component } from '@angular/core';
import {Router} from "@angular/router";

import { TaskService }   from '../shared/task.service';
import {Task} from "../shared/task.model";

@Component({
    selector:'my-task',
    templateUrl: './app/task/task.html',
    styleUrls:['./app/task/task.css']
})
export class TaskComponent{
    private selectedTask:Task;
    private tasks:Array<Task>;
    constructor(private taskService:TaskService, private router:Router){
        this.tasks = this.taskService.getTasks();
    }
    navToHeroDetail(id:number){
        console.log(id);
        this.router.navigate(['/main/task',id]);
    }
}
