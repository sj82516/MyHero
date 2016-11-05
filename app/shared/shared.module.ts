import { NgModule }      from '@angular/core';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

@NgModule({
  imports:   [ CommonModule, FormsModule ,ReactiveFormsModule],
  exports:   [ CommonModule, FormsModule ,ReactiveFormsModule]
})
export class SharedModule { }
