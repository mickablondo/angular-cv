import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import JSONProject from '../../../assets/projects.json';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    projects : Project[] = [];

    constructor() {
        this.getProjectsFromFile();
    }

    getProjectsFromFile() {
        JSONProject.projects.forEach((project: Project) => this.projects.push(project))
    }
}