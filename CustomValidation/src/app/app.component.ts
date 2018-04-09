import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators,  FormArray} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = '';
  desc:string;
  
  checkchar(desc):void{
    console.log(desc);
    
   // this.desc= (100 - parseInt(event.target.length))+"characters left";
  }

  doRegister(formId):void{
    if(formId.invalid){
      this.title = "Can't Submit this Form Errors";
    }
    else{
      this.title = "Submit this form";
    }
  }

  checkId(id:string):void{
    if(localStorage.getItem(id)){
      console.log(localStorage);
    }else{
      console.log(id ,"unique");
      localStorage.items=id;
    }
  }
}
