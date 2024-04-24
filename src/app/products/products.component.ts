import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    FormsModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

 public  products:any;
 //for search
  public  keyword:string="";
  constructor() {}

  ngOnInit() {
    this.products =[
    {"id":1,"name":"computer","price":4568},
    {"id":2,"name":"mouse","price":6568},
      {"id":3,"name":"clavier","price":400},
      {"id":4,"name":"clavier","price":500}
  ];

  }


  deleteProduct(p: any) {
    let index=this.products.indexOf(p);
    //le numero :index et 1 :element
    this.products.splice(index,1);
  }
  search(){
    /*console.log(this.keyword)
    let result=[];
    for (let p of this.products)
    {
      if(p.name.includes(this.keyword))
      {
        result.push(p)
      }
    }
    this.products=result*/
    this.products=this.products.filter((p:any)=>p.name.includes(this.keyword));
  }
}
