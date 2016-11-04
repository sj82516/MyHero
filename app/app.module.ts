import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

import { MainModule } from './main/main.module';
import { AppComponent }   from './app.component';
import { AccountComponent }   from './account/account.component';
import {routes} from './app.routes';
import { HeroService }   from './shared/hero.service';
import { TaskService }   from './shared/task.service';

@NgModule({
  imports:      [ BrowserModule, MainModule, routes, ReactiveFormsModule ],
  declarations: [ AppComponent, AccountComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ HeroService, TaskService ]
})
export class AppModule { }
