import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  isStep3Enabled=false;

  public formationForm : FormGroup;
  public experienceForm : FormGroup;
  public activiteForm : FormGroup;
  public formations!: FormArray;
  public experiences!: FormArray;
  public activites!: FormArray;
  public  anneeArray=['2022','2021','2020','2019','2018','2017','2016','2015','2014','2013','2012','2011','2010','2009','2008','2007','2006','2005','2004','2003','2002','2001','2000','1999','1998','1997','1996','1995','1994','1993','1992','1991','1990','1989','1988','1987','1986','1985','1984','1983','1982','1981','1980'];
  public moisArray = ['Janvier','Février','Mars','Avril','Mai','Juin','Juiller','Août','Septembre','Octobre','Novembre','Décembre']
  
  constructor(private fb: FormBuilder ) {
    this.formationForm = this.fb.group({
      formations : this.fb.array([this.createFormation()])
    });
    console.log('this formations---->',this.formationForm);
    this.experienceForm = this.fb.group({
      experiences : this.fb.array([this.createExperience()])
    });
    console.log('this experiencess---->',this.experienceForm);

    this.activiteForm = this.fb.group({
      activites : this.fb.array([this.createActivite()])
    });
   }

  ngOnInit(): void {
  }

  get formationArray() {
    return this.formationForm.controls['formations'] as FormArray;
  }

  get experienceArray() {
    return this.experienceForm.controls['experiences'] as FormArray;
  }

  get activiteArray() {
    return this.activiteForm.controls['activites'] as FormArray;
  }





 

  addFormation(){

    this.formations = this.formationForm.get('formations') as FormArray;
    this.formations.push(this.createFormation());
    
  }

  addExperience(){
    this.experiences = this.experienceForm.get('experiences') as FormArray;
    this.experiences.push(this.createExperience());
  }

  addActivite(){
    this.activites = this.activiteForm.get('activites') as FormArray;
    this.activites.push(this.createActivite());
  }

  createFormation(): FormGroup {
    return this.fb.group({
      etablissement :'',
      formationName : '',
        present:'',
        dateDebutMois:'',
        dateDebutAnnee:'',
        dateFinMois:'',
        dateFinAnnee:'',
        description:'',
    });
  }

  createExperience(): FormGroup {
    return this.fb.group({
      poste :'',
      employeur : '',
        present:'',
        dateDebutMois:'',
        dateDebutAnnee:'',
        dateFinMois:'',
        dateFinAnnee:'',
        description:'',
    });
  }

  createActivite(): FormGroup {
    return this.fb.group({
      poste :'',
      employeur : '',
        present:'',
        dateDebutMois:'',
        dateDebutAnnee:'',
        dateFinMois:'',
        dateFinAnnee:'',
        description:'',
    });
  }

  deleteFormation(i: any){
 
    this.formations.removeAt(i);
  }

  deleteExperience(i: any){
 
    this.experiences.removeAt(i);
  }

  deleteActivite(i: any){
 
    this.activites.removeAt(i);
  }




  onPresentChangeFormation(event:any, i:number){
console.log('on check present-formation-------------->',event.target.checked) ; 
if(event.target.checked){
  //((this.form.get('controls') as FormArray).at(index) as FormGroup).get('description').patchValue(item.description);
  ((this.formationForm.get('formations')as FormArray).at(i)as FormGroup).get('dateFinMois')?.disable();
  ((this.formationForm.get('formations')as FormArray).at(i)as FormGroup).get('dateFinAnnee')?.disable();
}else{
  ((this.formationForm.get('formations')as FormArray).at(i)as FormGroup).get('dateFinMois')?.enable();
  ((this.formationForm.get('formations')as FormArray).at(i)as FormGroup).get('dateFinAnnee')?.enable();
}
}

onPresentChangeExperience(event:any, i:number){
  console.log('on check present-experience-------------->',event.target.checked) ; 
  if(event.target.checked){
    //((this.form.get('controls') as FormArray).at(index) as FormGroup).get('description').patchValue(item.description);
    ((this.experienceForm.get('experiences')as FormArray).at(i)as FormGroup).get('dateFinMois')?.disable();
    ((this.experienceForm.get('experiences')as FormArray).at(i)as FormGroup).get('dateFinAnnee')?.disable();
  }else{
    ((this.experienceForm.get('experiences')as FormArray).at(i)as FormGroup).get('dateFinMois')?.enable();
    ((this.experienceForm.get('experiences')as FormArray).at(i)as FormGroup).get('dateFinAnnee')?.enable();
  }
  }

  onPresentChangeActivite(event:any, i:number){
    console.log('on check present-activite-------------->',event.target.checked) ; 
    if(event.target.checked){
      //((this.form.get('controls') as FormArray).at(index) as FormGroup).get('description').patchValue(item.description);
      ((this.activiteForm.get('activites')as FormArray).at(i)as FormGroup).get('dateFinMois')?.disable();
      ((this.activiteForm.get('activites')as FormArray).at(i)as FormGroup).get('dateFinAnnee')?.disable();
    }else{
      ((this.activiteForm.get('activites')as FormArray).at(i)as FormGroup).get('dateFinMois')?.enable();
      ((this.activiteForm.get('activites')as FormArray).at(i)as FormGroup).get('dateFinAnnee')?.enable();
    }
    }




 




}
