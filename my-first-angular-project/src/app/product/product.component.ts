import { Component, OnInit, OnChanges, OnDestroy  } from '@angular/core';
import { Product } from '../classes/Product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges, OnDestroy {
  // name:string='HP Laptop';
  // price:number=2000;

  product: Product = new Product("mac",2000,"assets/images/mac.jpg",true,true);

  constructor(){
    console.log("ProductComponent : constructor called")
  }

  ngOnInit(){
    console.log("ProductComponent : ngOnInit called")
  }

  ngOnChanges(){
    console.log("ProductComponent : ngOnChanges called")
  }

  ngOnDestroy(){
    console.log("ProductComponent : ngOnDestroy called")
  }

  addLike(evt:any):void{
    console.log(`like button clicked.! Its was clicked by ${evt.target.name}`);
  }

  addComments(val:string):void{
    console.log(`Thank you. Got your comments - ${val}` );
  }
}