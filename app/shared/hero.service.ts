import {Hero} from "./hero.model"
import {Injectable} from "@angular/core"

@Injectable()
export class HeroService{
    private heroList:Array<Hero> = new Array();
    private heroId = 0;
    getHeros(){
        return this.heroList;
    }

    getHeroById(id:number):Hero{
        for(let h of this.heroList){
            console.log(h);
            if(id == h.id){
                return h;
            }
        }
        return null;
    }
    createHero(newHero:Hero){
        newHero.id = this.heroId++;
        console.log(newHero);
        this.heroList.push(newHero);
    }
}
