import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <img src="{{imgSrc}}"/>
    <img [src]="imgSrc"/>
    <br>
    <span class="area" [class.isSpecial]="true">Ng class test</span>
    <span class="area" [ngClass]="'isSpecial'">ngClass test</span>
    <span class="area" [style.color]="'red'">Ng Style test</span>
    <span class="area" [ngStyle]="{'color':'red'}">ngStyle</span>
    <br>
    <button (click)="onClick($event)">Alert</button>
    <div class="square"[style.background-color]="bgColor">Link with Input</div>
    <input [(ngModel)]="bgColor" placeholder="Input some color"/>
    <input (keyup)="getInputValue($event)" placeholder="Input some text and see console"/>
  `,
  styles:[`
    .area{
        width: 200px;
        height: 100px;
        display: inline-block;
    }
    h1{
        color:red;
    }
    img,.square{
        width: 200px;
        height: 150px;
    }
    .isSpecial{
        border:2px solid black;
    }
  `]
})
export class AppComponent {
    private title:string = "Hello, Hero";
    private bgColor:string = "blue";
    private imgSrc:string ="https://udemy-images.udemy.com/course/750x422/500628_a962.jpg";
    
    onClick(){
        alert("Hello, Hero");
    }
    getInputValue(ev){
        console.log(ev,ev.target,ev.target.value);
    }
}
