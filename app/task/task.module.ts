import { NgModule }      from '@angular/core';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { TaskDetailComponent }   from './task-detail/task-detail.component';
import { TaskFormComponent }   from './task-form/task-form.component';
import { TaskComponent } from './task.component';

@NgModule({
  imports:      [ CommonModule, ReactiveFormsModule ],
  declarations: [ TaskComponent,TaskFormComponent,TaskDetailComponent ],
  exports:      [ TaskComponent ]
})
export class TaskModule { }
