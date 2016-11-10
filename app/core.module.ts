import { NgModule }      from '@angular/core';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

import { AccountComponent }   from './account/account.component';
import { HeroService }   from './shared/hero.service';
import { TaskService }   from './shared/task.service';
import { UserService,UserCanLoadGuard,UserCanDeactivateGuard }  from './shared/user.service';
import {HttpModule} from "@angular/http";

@NgModule({
  imports:      [ CommonModule, ReactiveFormsModule, FormsModule, HttpModule],
  declarations: [ AccountComponent ],
  providers: [ HeroService, TaskService, UserService ,UserCanLoadGuard,UserCanDeactivateGuard],
  exports: [ AccountComponent ],
})
export class CoreModule { }
