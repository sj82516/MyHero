import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls:['./app/app.component.css']
})
export class AppComponent {
    private title:string = "Hello, Hero";
    private imgSrc:string ="https://udemy-images.udemy.com/course/750x422/500628_a962.jpg";
    private heros:Array<Hero> = new Array<Hero>();
    private isImgShow:boolean = false;
    constructor(){
        this.heros.push(new Hero('hero1',10,100));
        this.heros.push(new Hero('hero2',20,150));
        this.heros.push(new Hero('hero3',30,20));
        this.heros.push(new Hero('hero4',25,10));
    }
}

class Hero{
    constructor(public name:string, public age:number, public money:number){};
}
