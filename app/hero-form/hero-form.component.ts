import {Component, OnInit, Output,OnDestroy} from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControl, AbstractControl} from "@angular/forms";

@Component({
  selector: 'my-hero-form',
  templateUrl: './app/hero-form/hero-form.html',
  styleUrls:['./app/hero-form/hero-form.css']
})
export class HeroFormComponent implements OnInit{
    private myForm:FormGroup;
    @Output newHero:Hero;
    constructor(private formBuilder:FormBuilder){
    }
    ngOnInit(){
        this.myForm = this.formBuilder.group({
            'name':['Hero',[Validators.required, Validators.minLength(4)]],
            'age':['',[Validators.required, Validators.pattern('^[0-9]{1-3}$')]],
            'money':['',[Validators.required]],
            'imgUrl':['', [Validators.required]]
        })
    }
}

class Hero{
    constructor(public name:string, public age:number, public money:number, public imgUrl:string){};
}
