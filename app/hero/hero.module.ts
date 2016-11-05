import { NgModule }      from '@angular/core';
import { SharedModule} from '../shared/shared.module';

import { HeroDetailComponent }   from './hero-detail/hero-detail.component';
import { HeroFormComponent }   from './hero-form/hero-form.component';
import { HeroComponent } from './hero.component';

@NgModule({
  imports:      [ SharedModule ],
  declarations: [ HeroDetailComponent,HeroFormComponent,HeroComponent ],
  exports:      [ HeroComponent ]
})
export class HeroModule { }
