import { Component,Output,Input,EventEmitter } from '@angular/core';
import {Hero} from "/dist/shared/hero.model";

@Component({
  selector: 'my-hero-detail',
  templateUrl: './app/hero/hero-detail/hero-detail.html',
  styleUrls:['./app/hero/hero-detail/hero-detail.css']
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
