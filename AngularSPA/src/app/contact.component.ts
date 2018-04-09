

import {Component,OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from './product';
import {ProductService} from './productservice'
@Component({
  selector:'contact',
  template:`<h1>Contacts::</h1>
  `
})
export class ContactComponent implements OnInit{
message:string;
activatedRoute: ActivatedRoute;
  constructor(activatedRoute:ActivatedRoute,private productService :ProductService){
    this.activatedRoute = activatedRoute;
  }
  ngOnInit(){
    this.activatedRoute.params.subscribe((params)=>{
      this.message = "Price is "+params.price+" And Brand is "+params.brand;
    })
  }

  
}
