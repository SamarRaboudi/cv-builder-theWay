import { AfterViewInit, Component, Input, OnInit, ViewChild, ViewChildren} from '@angular/core';
import { FormationComponent } from 'src/app/formation/formation.component';
import { NavCvComponent } from 'src/app/nav-cv/nav-cv.component';
import { PersonalInfoComponent } from 'src/app/personal-info/personal-info.component';
import { SkillsComponent } from 'src/app/skills/skills.component';
import { TemplateCvOneComponent } from 'src/app/template-cv-one/template-cv-one.component';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit, AfterViewInit{
  title = "";
  data={personalInfo:{}, formation:{}, experience:{}, activite:{}, competence:{}, certificat:{}, langue:{}, interet:{}, photoProfil:"", title:""};
  @ViewChild(PersonalInfoComponent) personalInfo!: PersonalInfoComponent;
  @ViewChild(FormationComponent) formation!: FormationComponent;
  @ViewChild(SkillsComponent) skill!: SkillsComponent;
  @ViewChild(TemplateCvOneComponent) modeleCV!: TemplateCvOneComponent;
  @ViewChild(NavCvComponent) navCV!: NavCvComponent;

 isStep1Enabled=true;
 isStep2Enabled=false;
 isStep3Enabled=false;
 isStep4Enabled=false;
 showModele1=false;
 showModele2=false;
 showModele3=false;
 cvModele1 = false;
 cvModele2 = false;
 cvModele3 = false;
 
 

  constructor() {
   }
  ngAfterViewInit(): void {
    console.log('samar------------------>',this.personalInfo?.personalInfoForm.value);
  }


  ngOnInit(): void {
   window.scroll(0,0);
  }

  onContinue(){
    
    this.title = this.navCV.cvTitleForm.value.titleCV;
    console.log("cv title ----->", this.title);
    this.data.title = this.title;

    
    if(this.isStep1Enabled===true)
    {
      this.isStep1Enabled = false;
      this.isStep2Enabled = true;
      window.scroll(0,0);
      console.log('samar------------------>',this.personalInfo?.personalInfoForm.value);

     
      
     
    }
    else if(this.isStep2Enabled===true)
    {
      this.isStep2Enabled = false;
      this.isStep3Enabled = true;
      window.scroll(0,0);
      console.log('samar------------------>',this.formation?.formationForm.value);
     // console.log('link------------------->',this.personalInfo?.photoLink);
    }
    else if(this.isStep3Enabled===true)
    {
      this.isStep3Enabled = false;
      this.isStep4Enabled = true;
      window.scroll(0,0);
      console.log('samar------------------>',this.personalInfo?.personalInfoForm.value);
      console.log('samar------------------>',this.formation?.formationForm.value);
      console.log('samar------------------>',this.skill.certificatForm);

      this.data.personalInfo = this.personalInfo?.personalInfoForm.value;
      console.log(this.data.personalInfo);
      this.data.competence = this.skill?.competenceForm.value;
      console.log(this.data.competence); 
      this.data.interet = this.skill?.interetForm.value;
      console.log('interets------>',this.data.interet); 
      this.data.photoProfil=this.personalInfo?.photoLink;
      this.data.certificat = this.skill?.certificatForm.value;
      this.data.langue = this.skill?.langueForm.value;
      this.data.formation = this.formation?.formationForm.value;
      this.data.experience = this.formation?.experienceForm.value;
      this.data.activite = this.formation?.activiteForm.value;


    }
    else if(this.isStep4Enabled && this.showModele1){
      this.isStep4Enabled = false;
      this.showModele1 = false;
      this.cvModele1 = true;
      window.scroll(0,0);
      

    }

    else if(this.isStep4Enabled && this.showModele2){
      this.isStep4Enabled = false;
      this.showModele2 = false;
      this.cvModele2 = true;
      window.scroll(0,0);

    }

    else if(this.isStep4Enabled && this.showModele3){
      this.isStep4Enabled = false;
      this.showModele3 = false;
      this.cvModele3 = true;
      window.scroll(0,0);

    }
  }
  
  onClickModele1(){
    this.showModele1 = true;
    this.showModele2= false;
    this.showModele3= false;
  }

  onClickModele2(){
    this.showModele2 = true;
    this.showModele1= false;
    this.showModele3= false;
  }

  onClickModele3(){
    this.showModele3= true;
    this.showModele2 = false;
    this.showModele1= false;
  }

}
