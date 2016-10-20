import {Hero} from "./hero.model"

export class HeroService{
    private heroList:Array<Hero> = new Array();
    getHeros(){
        return this.heroList;
    }
    createHero(newHero:Hero){
        this.heroList.push(newHero);
    }
}
