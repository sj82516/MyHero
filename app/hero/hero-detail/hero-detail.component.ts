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
    private subscribeQ:Subscription = new Subscription();
    private subscribeF:Subscription = new Subscription();
    constructor(private activatedRoute:ActivatedRoute, private router:Router, private heroService:HeroService){}
    values(obj) : Array<string> {
        return Object.values(obj);
    }

    ngOnInit(){
        this.subscribe = this.activatedRoute.params.subscribe((params)=>{
            console.log(params['id']);
            if(this.heroService.getHeroById(params['id'])!=null){
                this.selectedHero = this.heroService.getHeroById(params['id']);
            }
        });
        this.subscribeQ =  this.activatedRoute.queryParams.subscribe((params)=>{
            console.log(params,params['name']);
        });
        this.subscribeF =  this.activatedRoute.fragment.subscribe((f)=>{
            console.log(f);
        });
    }

    ngOnDestroy(){
        this.subscribe.unsubscribe();
        this.subscribeQ.unsubscribe();
        this.subscribeF.unsubscribe();
    }

    onClick(){
        this.router.navigate(['/main/hero']);
    }
}
