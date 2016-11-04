import {Task} from "./task.model"
import {Injectable} from "@angular/core"

@Injectable()
export class TaskService{
    private taskList:Array<Task> = new Array();
    private taskId = 0;

    getTasks(){
        return this.taskList;
    }
    getTaskById(id:number){
        for(let t of this.taskList){
            if(t.id == id){
                return t;
            }
        }
        return null;
    }
    createTask(newTask:Task){
        newTask.id = this.taskId++;
        console.log(newTask);
        this.taskList.push(newTask);
    }
}
