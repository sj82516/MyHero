import {Hero} from "./hero.model"

export class Task{
    public heroList:{[key:number]:Hero} = {};
    constructor(public title:string, public description:string, public payment:number, public state:string = 'open', public id?:number){}
    addNewHero(h:Hero){
        this.heroList[h.id] = h;
    }
    deleteHero(h:Hero){
        delete this.heroList[h.id];
    }
}
