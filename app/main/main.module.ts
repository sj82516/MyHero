import { NgModule }      from '@angular/core';
import { SharedModule} from '../shared/shared.module';

import {MainComponent} from "./main.component";
import { HeroModule }   from '../hero/hero.module';
import { TaskModule }   from '../task/task.module';
import { RouterModule } from '@angular/router';

import { ManageComponent }   from '../manage/manage.component';
import { NavComponent } from '../nav/nav.component';
import { routing } from './main.routes'


@NgModule({
  imports:      [ routing, HeroModule, TaskModule,SharedModule],
  declarations: [ MainComponent, ManageComponent, NavComponent],
  exports:      [ MainComponent]
})
export class MainModule { }
