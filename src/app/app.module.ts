import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
/* import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; */
import { RichTextEditorModule, ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
/* import {MatInputModule} from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'; 
import { MatFormFieldModule } from '@angular/material/form-field';*/
import { FormationComponent } from './formation/formation.component';
import { SkillsComponent } from './skills/skills.component';
import { NavCvComponent } from './nav-cv/nav-cv.component';
import { TableauBordComponent } from './tableau-bord/tableau-bord.component';
import { ModelesComponent } from './modeles/modeles.component';
import { ConseilsComponent } from './conseils/conseils.component';
import { TemplateCvOneComponent } from './template-cv-one/template-cv-one.component';
import { FormulaireComponent } from './FormulaireCV/formulaire/formulaire.component';
import { TemplateCvTwoComponent } from './template-cv-two/template-cv-two.component';
import { TemplateCvThreeComponent } from './template-cv-three/template-cv-three.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
    PersonalInfoComponent,
    FormationComponent,
    SkillsComponent,
    NavCvComponent,
    TableauBordComponent,
    ModelesComponent,
    ConseilsComponent,
    TemplateCvOneComponent,
    FormulaireComponent,
    TemplateCvTwoComponent,
    TemplateCvThreeComponent,
    
  ],
  imports: [
  //  BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RichTextEditorModule,
  /*   MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule */
  ],
  exports:[],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
