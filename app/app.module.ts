import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { AppComponent }   from './app.component';
import { HeroDetailComponent }   from './hero-detail/hero-detail.component';
import { HeroFormComponent }   from './hero-form/hero-form.component';
import { HeroService }   from './hero.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HeroDetailComponent,HeroFormComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HeroService]
})
export class AppModule { }
