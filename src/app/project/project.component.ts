import { Component } from '@angular/core';
import { ProjectService } from './service/project.service';
import { Project } from './models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  public projects!: Project[];

  constructor(private projectProvider: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectProvider.getProjects();
    console.log(this.projects)
  }
}
