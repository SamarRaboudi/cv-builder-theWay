import { Component, INJECTOR, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  profile = 
  {firstName : "Samar",
  lastName : "Raboudi",
  country : "Tunisia"}

  linkImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
  titleColor = "color: red;"
  nameColor = "green"
  num = 1
  countryStyle = "color  : black"

  verif = true

  dataArray = ["un", "deux", "trois", "quatre", "cinq"]

  //footer2 in CSS
  footerVar ="footer2"
  footer2Style = "yellow"


  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0);
  }

  incr()
  {
    this.num++
  }

  decr(){
    this.num--
  }

  blue(){
    this.countryStyle = "color : blue;"
  }
  goToFormulaire(){
    
  }
}
