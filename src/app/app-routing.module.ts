import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { FormationComponent } from './formation/formation.component';
import { SkillsComponent } from './skills/skills.component';
import { TableauBordComponent } from './tableau-bord/tableau-bord.component';
import { ModelesComponent } from './modeles/modeles.component';
import { ConseilsComponent } from './conseils/conseils.component';
import { TemplateCvOneComponent } from './template-cv-one/template-cv-one.component';
import { FormulaireComponent } from './FormulaireCV/formulaire/formulaire.component';
import { TemplateCvTwoComponent } from './template-cv-two/template-cv-two.component';
import { TemplateCvThreeComponent } from './template-cv-three/template-cv-three.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'connexion', component: LoginComponent},
  {path: 'informationPerso', component : PersonalInfoComponent },
  {path: 'formation', component : FormationComponent },
  {path: 'competence', component : SkillsComponent },
  {path: 'tableauDeBord', component : TableauBordComponent },
  {path: 'modeles', component : ModelesComponent },
  {path: 'conseils', component : ConseilsComponent },
  {path: 'cvModele1', component : TemplateCvOneComponent },
  {path:'formulaire', component: FormulaireComponent},
  {path:'cvModele2', component: TemplateCvTwoComponent},
  {path:'cvModele3', component: TemplateCvThreeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
