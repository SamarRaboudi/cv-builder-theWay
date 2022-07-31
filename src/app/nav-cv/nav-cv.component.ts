import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nav-cv',
  templateUrl: './nav-cv.component.html',
  styleUrls: ['./nav-cv.component.css']
})
export class NavCvComponent implements OnInit {
  public cvTitleForm: FormGroup;

 @Input() value:string = "";
 public title : string | undefined;
  constructor(private fb:FormBuilder) { 
    this.cvTitleForm = this.fb.group({
      titleCV: [''],
    })
  }

  ngOnInit(): void {
    console.log('-----------------------nav cv here --------------------')

  }

  

}
