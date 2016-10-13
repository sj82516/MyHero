import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls:['./app/app.component.css']
})
export class AppComponent {
    private seletedHero:Hero;
    private heros:Array<Hero> = new Array();
    constructor(){
        this.heros.push(new Hero('hero1',10,100,"http://friendoprod.blob.core.windows.net/missionpics/images/3172/member/8ef320d2-b8b7-4e07-9c8a-6c186ce9f70d.gif"));
        this.heros.push(new Hero('hero2',20,150,"http://pic.pimg.tw/hugo0630/1392798439-1416503839.png"));
        this.heros.push(new Hero('hero3',30,20,"https://jrudddigital.files.wordpress.com/2015/07/line-coney.png?w=219&h=232"));
        this.heros.push(new Hero('hero4',25,10,"http://pic.pimg.tw/imshihching/1372180721-918631960.png"));
        this.selectedHero = this.heros[0];
    }

    onClick(ev){
        alert("Hello from "+ ev);
    }
}

class Hero{
    constructor(public name:string, public age:number, public money:number, public imgUrl:string){};
}
