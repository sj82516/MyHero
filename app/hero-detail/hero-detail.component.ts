import { Component,Output,Input,EventEmitter } from '@angular/core';

@Component({
  selector: 'my-hero-detail',
  templateUrl: './app/hero-detail/hero-detail.html',
  styleUrls:['./app/hero-detail/hero-detail.css']
})
export class HeroDetailComponent {
    @Input() selectedHero:Hero;
    @Output() onHelloFromDetail:EventEmitter<any> = new EventEmitter();
    constructor(){
    }

    onClick(ev){
        this.onHelloFromDetail.emit(ev);
    }
}

class Hero{
    constructor(public name:string, public age:number, public money:number, public imgUrl:string){};
}
