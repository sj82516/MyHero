import { Component } from '@angular/core';
import { HeroService }   from '../shared/hero.service';
import {Router} from "@angular/router";

import {Hero} from "../shared/hero.model";

@Component({
    selector:'my-hero',
    templateUrl: './app/hero/hero.html',
    styleUrls:['./app/hero/hero.css']
})
export class HeroComponent{
    private heros:Array<Hero>;
    constructor(private heroService:HeroService, private router:Router){
        this.heros = this.heroService.getHeros();
    }
    navToHeroDetail(id:number){
        console.log(id);
        this.router.navigate(['/main/hero',id], {queryParams:{'name':"Hello", 'num':10}, fragment:id});
    }
}
