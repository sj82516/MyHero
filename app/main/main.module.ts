import { NgModule }      from '@angular/core';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

import {MainComponent} from "./main.component";
import {routes} from "./main.routes";
import { HeroModule }   from '../hero/hero.module';
import { TaskModule }   from '../task/task.module';
import { ManageComponent }   from '../manage/manage.component';
import { NavComponent } from '../nav/nav.component';


@NgModule({
  imports:      [ CommonModule, routes, HeroModule, ReactiveFormsModule,TaskModule ],
  declarations: [ MainComponent, ManageComponent, NavComponent],
  exports:      [ MainComponent]
})
export class MainModule { }
