import { Task } from "./task.model"

export class Hero{
    //宣告TaskList，以Map形式
    public taskList: {[key:number]:Task} = {};
    constructor(public name:string, public age:number, public money:number, public imgUrl:string, public address:Address, public id?:number){};

    addNewTask(t:Task){
        this.taskList[t.id] = t;
    }
    deleteTask(t:Task){
        delete this.taskList[t.id];
    }
}

interface Address{
    country:string,
    city:string
}
