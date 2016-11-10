import {Component, OnInit} from '@angular/core';
import { HeroService }   from '../shared/hero.service';
import {Router} from "@angular/router";

import { ComponentCanDeactivate }  from '../shared/user.service';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

import {Hero} from "../shared/hero.model";
import {HeroFormComponent} from "./hero-form/hero-form.component";
import {ViewChild} from "@angular/core";

@Component({
    selector:'my-hero',
    templateUrl: './app/hero/hero.html',
    styleUrls:['./app/hero/hero.css']
})
export class HeroComponent implements ComponentCanDeactivate, OnInit{
    private heros:Array<Hero>;
    constructor(private heroService:HeroService, private router:Router){}

    @ViewChild(HeroFormComponent)
    private heroFormComponent: HeroFormComponent;

    ngOnInit(){
        this.heros = this.heroService.getHeros();
    }

    navToHeroDetail(id:string){
        this.router.navigate(['/main/hero/detail'], {queryParams:{'id':id}});
    }
    canDeactivate():boolean | Observable<boolean> {
        if(this.heroFormComponent.myForm.valid || this.heroFormComponent.myForm.pristine){
            return true;
        }
        return confirm("Form is not completed, Are you sure to leave?");
    }
}
