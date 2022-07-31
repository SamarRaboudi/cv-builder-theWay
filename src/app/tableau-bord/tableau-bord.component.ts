import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau-bord',
  templateUrl: './tableau-bord.component.html',
  styleUrls: ['./tableau-bord.component.css']
})
export class TableauBordComponent implements OnInit {
  public title = "Tableau de bord";

  constructor() { }

  ngOnInit(): void {
  }

  tablBordTitlle(){
    if(this.title!=="Tableau de bord")
    {
     this.title="Tableau de bord";
    }
   }

  cvTitlle(){
   if(this.title!=="Curriculum Vitea")
   {
    this.title="Curriculum vitae";
   }
  }

  lettreTitlle(){
    if(this.title!=="Lettre de motivation")
    {
     this.title="Lettre de motivation";
    }
   }

   candidatureTitlle(){
    if(this.title!=="Candidature")
    {
     this.title="Candidature";
    }
   }

   jobTitlle(){
    if(this.title!=="Offres d'emplois")
    {
     this.title="Offres d'emplois";
    }
   }

}
