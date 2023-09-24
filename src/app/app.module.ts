import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormationComponent } from './formation/formation.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectComponent } from './project/project.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    ExperienceComponent,
    ProjectComponent
  ],
  imports: [
    MatCardModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/experiences', pathMatch: 'full' },
      {path: 'experiences', component: ExperienceComponent},
      {path: 'formations', component: FormationComponent},
      {path: 'projects', component: ProjectComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
