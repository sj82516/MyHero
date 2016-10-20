import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { AppComponent }   from '/dist/app.component';
import { HeroModule }   from '/dist/hero/hero.module';
import { HeroService }   from '/dist/shared/hero.service';

@NgModule({
  imports:      [ BrowserModule, HeroModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ HeroService ]
})
export class AppModule { }
