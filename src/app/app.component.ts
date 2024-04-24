import { Component } from '@angular/core';
import {Route, Router, RouterLink, RouterOutlet} from '@angular/router';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstapp';
  public currentRoute:any;

  constructor(private  router:Router) {
  }
  gotoHome() {
    this.currentRoute="home"
       this.router.navigateByUrl("/home")
  }

  gotoProduct() {
    this.currentRoute="products"
    this.router.navigateByUrl("/products")
  }
}
