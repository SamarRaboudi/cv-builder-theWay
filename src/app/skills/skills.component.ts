import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public competenceForm: FormGroup;
  public interetForm : FormGroup;
  public certificatForm: FormGroup;
  public langueForm : FormGroup;
  public competences!: FormArray;
  public certificats!: FormArray;
  public langues!: FormArray;
  public interets!: FormArray;
  public  anneeArray=['2022','2021','2020','2019','2018','2017','2016','2015','2014','2013','2012','2011','2010','2009','2008','2007','2006','2005','2004','2003','2002','2001','2000','1999','1998','1997','1996','1995','1994','1993','1992','1991','1990','1989','1988','1987','1986','1985','1984','1983','1982','1981','1980'];
  public moisArray = ['Janvier','Février','Mars','Avril','Mai','Juin','Juiller','Août','Septembre','Octobre','Novembre','Décembre']

  constructor(private fb: FormBuilder) { 
    this.competenceForm = this.fb.group({
      competences : this.fb.array([this.createCompetence()])
    });

    this.interetForm = this.fb.group({
      interets : this.fb.array([this.createInteret()])
    });
    this.certificatForm = this.fb.group({
      certificats : this.fb.array([this.createCertificat()])
    });

    console.log('this certificats---->',this.certificatForm);

    this.langueForm = this.fb.group({
      langues : this.fb.array([this.createLangue()])
    });
  }

  ngOnInit(): void {
  }

  get competenceArray() {
    return this.competenceForm.controls['competences'] as FormArray;
  }

  addCompetence(){

    this.competences = this.competenceForm.get('competences') as FormArray;
    this.competences.push(this.createCompetence());
    
  }

  createCompetence(): FormGroup {
    return this.fb.group({
     competence :'',
    });
  }

  deleteCompetence(i: any){
 
    this.competences.removeAt(i);
  }

  get certificatArray() {
    return this.certificatForm.controls['certificats'] as FormArray;
  }

  addCertificat(){

    this.certificats = this.certificatForm.get('certificats') as FormArray;
    this.certificats.push(this.createCertificat());
    
  }

  createCertificat(): FormGroup {
    return this.fb.group({
      certificat :'',
      present : '',
      dateCertificatMois : '',
      dateCertificatAnnee:'',
    });
  }

  deleteCertificat(i: any){
 
    this.certificats.removeAt(i);
  }

  get langueArray() {
    return this.langueForm.controls['langues'] as FormArray;
  }

  addLangue(){

    this.langues = this.langueForm.get('langues') as FormArray;
    this.langues.push(this.createLangue());
    
  }

  createLangue(): FormGroup {
    return this.fb.group({
      langue :'',
      niveauLangue : '',
    });
  }

  deleteLangue(i: any){
 
    this.langues.removeAt(i);
  }

  
  get interetArray() {
    return this.interetForm.controls['interets'] as FormArray;
  }

  addInteret(){

    this.interets = this.interetForm.get('interets') as FormArray;
    this.interets.push(this.createInteret());
    
  }

  createInteret(): FormGroup {
    return this.fb.group({
      interet :'',
    });
  }

  deleteInteret(i: any){
 
    this.interets.removeAt(i);
  }


  onPresentChange(event:any, i:number){
    console.log('on check present-formation-------------->',event.target.checked) ; 
    if(event.target.checked){
      //((this.form.get('controls') as FormArray).at(index) as FormGroup).get('description').patchValue(item.description);
      ((this.certificatForm.get('certificats')as FormArray).at(i)as FormGroup).get('dateCertificatMois')?.disable();
      ((this.certificatForm.get('certificats')as FormArray).at(i)as FormGroup).get('dateCertificatAnnee')?.disable();
    }else{
      ((this.certificatForm.get('certificats')as FormArray).at(i)as FormGroup).get('dateCertificatMois')?.enable();
      ((this.certificatForm.get('certificats')as FormArray).at(i)as FormGroup).get('dateCertificatAnnee')?.enable();
    }
    }


 



}
