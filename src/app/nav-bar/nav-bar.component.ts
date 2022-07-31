import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public respnsiveNav = "display:none";

  constructor() { }

  ngOnInit(): void {
  }

  viewResponsiveNav(){
    this.respnsiveNav = "display:block";
  }

  closeResponsiveNav(){
    this.respnsiveNav = "display:none";
  }

  

}
