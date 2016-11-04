import { NgModule }      from '@angular/core';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { HeroDetailComponent }   from './hero-detail/hero-detail.component';
import { HeroFormComponent }   from './hero-form/hero-form.component';
import { HeroComponent } from './hero.component';

@NgModule({
  imports:      [ CommonModule, FormsModule, ReactiveFormsModule ],
  declarations: [ HeroDetailComponent,HeroFormComponent,HeroComponent ],
  exports:      [ HeroComponent ]
})
export class HeroModule { }
