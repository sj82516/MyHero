import { Component,OnInit,OnDestroy } from '@angular/core';
import { HeroService }   from '../../shared/hero.service';

import {ActivatedRoute, Router} from "@angular/router";

import {Subscription} from "rxjs/Subscription";


import {Hero} from "../../shared/hero.model";

@Component({
  selector: 'my-hero-detail',
  templateUrl: './app/hero/hero-detail/hero-detail.html',
  styleUrls:['./app/hero/hero-detail/hero-detail.css']
})
export class HeroDetailComponent implements OnInit,OnDestroy{
    private selectedHero:Hero;
    private subscribe:Subscription = new Subscription();
    constructor(private activatedRoute:ActivatedRoute, private router:Router, private heroService:HeroService){}
    values(obj) : Array<string> {
        return Object.values(obj);
    }

    ngOnInit(){
        this.subscribe = this.activatedRoute.queryParams.subscribe((queryParams)=>{
            console.log('in detail:'+queryParams['id']);
            if(this.heroService.getHeroById(queryParams['id'])!=null){
                this.selectedHero = this.heroService.getHeroById(queryParams['id']);
                console.log(this.selectedHero);
            }
        });
    }

    ngOnDestroy(){
        this.subscribe.unsubscribe();
    }

    onClick(){
        this.router.navigate(['/main/hero']);
    }
}
