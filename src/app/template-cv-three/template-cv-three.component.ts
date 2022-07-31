import { Component, Input, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-template-cv-three',
  templateUrl: './template-cv-three.component.html',
  styleUrls: ['./template-cv-three.component.css']
})
export class TemplateCvThreeComponent implements OnInit {

  @Input() data:any={};

  
  public openPDF(): void {
    
    let DATA: any = document.getElementById('cv');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 210;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      let width = PDF.internal.pageSize.getWidth();
      let height = PDF.internal.pageSize.getHeight();
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      let titleCV = this.data.title +'.pdf';
      PDF.save(titleCV);
    });
  }



  public imgLink = "";
  public nom = "Nom";
  public prenom = "Prénom";
  public profil = "Web Developer";
  public profilDescription="3 ans d’expérience en tant que dévelopeur web. Je rigoureuse et flexible, motivée et dotée d'un solide esprit d'équipe. Je me passionne pour les nouvelles technologies et le Web et suis compétente en plusieurs langages de programmation.";
  public dateNaissance = "24/05/1999";
  public telephone = "+216 23 154 897";
  public adresse = "12 rue Nationale";
  public codePostal = "3700";
  public ville="Tours";
  public email = "nomprenom@gmail.com";
  public linkedin = "www.linkedin.com";
  public competenceArray : any[] = [];
  public langueArray : any[] = [];
  public interetArray: any[] = [];
  public certificatArray: any[] = [];
  public experienceProfessionnelleArray: any[] = [];
  public formationArray : any[] = [];
  public extraActiviteArray : any[] = [];
  public verifyCompetence = false;
  public verifyInteret = false;
  public verifyLangue = false;
  public verifyCertficat = false;
  public verifyFormation = false;
  public verifyExperience = false;
  public verifyActivite = false;
  public viewLogo = true;


  constructor() {
    
    
   }

  ngOnInit(): void {
    console.log('finalement',this.data.personalInfo.prenom);
    this.setPersonalData();
    this.setCompetenceData();
    this.setInteretData();
    this.setCertificatData();
    this.setLangueData();
    this.setFormationData();
    this.setExperienceProfessionnelleData();
    this.setExtraActiviteData();
    
  }

  setPersonalData(){
    this.prenom=this.data.personalInfo.prenom;
    this.nom=this.data.personalInfo.nom;
    this.profil = this.data.personalInfo.profil;
    this.email = this.data.personalInfo.email;
    this.profilDescription = this.data.personalInfo.description;
    this.telephone = this.data.personalInfo.telephone;
    this.dateNaissance = this.data.personalInfo.dateNaissance;
    this.adresse = this.data.personalInfo.adresse;
    this.codePostal = this.data.personalInfo.codePostal;
    this.linkedin = this.data.personalInfo.linkedin;
    this.ville = this.data.personalInfo.ville;
    this.imgLink = this.data.photoProfil;
    console.log(this.data.photoProfil);

  }

  setCompetenceData(){
for( let i =0 ; i<this.data.competence.competences.length; i++ )
{
  if(this.data.competence.competences[i].competence === "")
  continue;
     this.competenceArray.push(this.data.competence.competences[i].competence);
  }
  console.log(this.competenceArray);
  if(this.competenceArray.length !== 0)
  {
      this.verifyCompetence = true;
  }
}

setInteretData(){
  for( let i =0 ; i<this.data.interet.interets.length; i++ )
  {
    if(this.data.interet.interets[i].interet === "")

    continue;  

       this.interetArray.push(this.data.interet.interets[i].interet);
 
    }

    console.log("interet---------->",this.interetArray)

    if(this.interetArray.length !== 0){
      this.verifyInteret = true;
    }
    
}

setCertificatData(){

   for( let i =0 ; i<this.data.certificat.certificats.length; i++){
    console.log("certificat[i]---->",this.data.certificat.certificats[i]);
    if(this.data.certificat.certificats[i].certificat === "")
    continue;
    this.certificatArray.push(this.data.certificat.certificats[i]);

   }
   console.log("certificatFinal---->",this.certificatArray);
   if(this.certificatArray.length !== 0)
   {
    this.verifyCertficat = true;
   }

}

setLangueData(){
console.log("langue----->",this.data.langue.langues)
  for( let i =0 ; i<this.data.langue.langues.length; i++){
    if(this.data.langue.langues[i].langue === "")
    continue;
    this.langueArray.push(this.data.langue.langues[i]);

  }
  console.log("langueFinale----->",this.langueArray)
  if(this.langueArray.length !== 0 )
  {
     this.verifyLangue = true;
  }

}

setFormationData(){

  for( let i =0 ; i<this.data.formation.formations.length; i++){
    if(!this.data.formation.formations[i].etablissement  && !this.data.formation.formations[i].formationName)
    continue;
    this.formationArray.push(this.data.formation.formations[i]);

  }
  console.log("formation Finale -----> ",this.formationArray);
  if(this.formationArray.length !== 0)
  {
     this.verifyFormation = true;
  }

}

setExperienceProfessionnelleData(){
console.log("experience : ",this.data.experience.experiences)
  for( let i =0 ; i<this.data.experience.experiences.length; i++){
    if(!this.data.experience.experiences[i].poste && !this.data.experience.experiences[i].employeur)
    continue;
    this.experienceProfessionnelleArray.push(this.data.experience.experiences[i]);

  }
  console.log("experience finale ------>",this.experienceProfessionnelleArray);
  if(this.experienceProfessionnelleArray.length)
  {
    this.verifyExperience = true;
  }

}

setExtraActiviteData(){

  for( let i =0 ; i<this.data.activite.activites.length; i++){
    if(!this.data.activite.activites[i].poste && !this.data.activite.activites[i].employeur)
    continue;
    this.extraActiviteArray[i]=this.data.activite.activites[i];

  }
  console.log(this.extraActiviteArray);
  if(this.extraActiviteArray.length !== 0)
  {
    this.verifyActivite = true;
  }

}


}
