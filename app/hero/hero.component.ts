import { Component } from '@angular/core';
import { HeroService }   from '/dist/shared/hero.service';
import {Hero} from "/dist/shared/hero.model";

@Component({
    selector:'my-hero',
    templateUrl: './app/hero/hero.html',
    styleUrls:['./app/hero/hero.css']
})
export class HeroComponent{
    private selectedHero:Hero;
    private heros:Array<Hero>;
    constructor(private heroService:HeroService){
        this.heroService.createHero(new Hero('hero1',10,100,"http://friendoprod.blob.core.windows.net/missionpics/images/3172/member/8ef320d2-b8b7-4e07-9c8a-6c186ce9f70d.gif"));
        this.heroService.createHero(new Hero('hero2',20,150,"http://pic.pimg.tw/hugo0630/1392798439-1416503839.png"));
        this.heroService.createHero(new Hero('hero3',30,20,"https://jrudddigital.files.wordpress.com/2015/07/line-coney.png?w=219&h=232"));
        this.heroService.createHero(new Hero('hero4',25,10,"http://pic.pimg.tw/imshihching/1372180721-918631960.png"));
        this.heros = this.heroService.getHeros();
        this.selectedHero = this.heros[0];
    }

    handlerHelloFromDetail(ev){
        console.log("recieved from son comp");
        alert("hello from "+ev);
    }
}
