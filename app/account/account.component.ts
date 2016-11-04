import {Component, OnInit,OnDestroy, EventEmitter} from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControl, AbstractControl} from '@angular/forms';

@Component({
    selector:'my-account',
    templateUrl:'./app/account/account.html',
    styleUrls:['./app/account/account.css']
})
export class AccountComponent{
    private myForm:FormGroup;
    private errors:{[key:string]:Array<any>} = {};
    private errorMsgs:{[key:string]:string} = {};

    constructor(private formBuilder:FormBuilder){}

    ngOnInit(){
        this.myForm = this.formBuilder.group({
            'account':['',[Validators.required, Validators.minLength(4)]],
            'password':['',[Validators.required, Validators.maxLength(10)]],
        })
        this.registerInputCheck();
    }

    onSave(ev){

    }

    //配置錯誤訊息
    registerInputCheck(){
        this.errors['account'] = [
            {key:'required', msg:'* account required!'},
            {key:'minlength', msg:'* account is too short!'},
        ];
        this.errors['password'] = [
            {key:'required', msg:'* password required!'},
            {key:'maxlength', msg:'* password is to long!'}
        ];
    }

    handleInputError(control:AbstractControl, outputElm){
        if(!control.valid && this.errors[outputElm]){
            for(let err of this.errors[outputElm]){
               if(control.hasError(err.key)){
                   this.errorMsgs[outputElm] = err.msg;
               }
            }
        }
    }
}
