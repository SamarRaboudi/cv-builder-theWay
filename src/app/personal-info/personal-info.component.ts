import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  personalInfoForm:FormGroup;
  cvName="";
  photoLink ="";
  isStep2Enabled=false;

  @Input('isStep1Enabled') isStep1Enabled: any;

  
  constructor(private fb:FormBuilder, private dataService: DataService) { 
    this.personalInfoForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', Validators.required],
      profil: ['', Validators.required],
      adresse: ['', Validators.required],
      codePostal: ['', Validators.required],
      ville: ['', Validators.required],
      telephone: ['', Validators.required],
      dateNaissance: ['',],
      linkedin: ['', ],
      description: ['', Validators.required],
     

    });
  }

  ngOnInit(): void {
  }

  onFileChanged(e:any) {
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.photoLink=event.target.result;
      }
    }
  }

 /* onContinue(){
    this.isStep1Enabled = false;
    this.isStep2Enabled=true;
     window.scroll(0,0);
   // this.dataService.setData(this.personalInfoForm.value);
   // console.log('samar--------------------->',this.personalInfoForm.value);   
  }*/

}
