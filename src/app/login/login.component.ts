import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isLogin = 'Connexion';
  public action= "S'inscrire";
  public profileExist="Pas encore de compte ?";
  public btnAction = "SE CONNECTER";
  public actionDescrip = "se connecter";
  public loginForm: FormGroup;

  constructor(private fb:FormBuilder) { 
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }
  onSignUp(){
   if(this.isLogin === "Connexion")
   { this.isLogin = "S'inscrire";
    this.action = "Se connecter";
    this.profileExist = "Vous avez déjà un compte ?";
    this.btnAction = "CRÉER UN COMPTE";
    this.actionDescrip ="s'inscrire";
  }
    else{
      this.isLogin = "Connexion";
    this.action = "S'inscrire";
    this.profileExist = "Pas encore de compte ?";
    this.btnAction = "SE CONNECTER";
    this.actionDescrip ="se connecter";

    }

  }

  
}
