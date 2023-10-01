import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import JSONProject from '../../../assets/projects.json';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    projects : Project[] = [];
    url: string = "https://api.github.com/users/mickablondo/repos";

    constructor(private http: HttpClient) {
        this.getProjectsFromFile();
    }

    getProjectsFromFile() {
        JSONProject.projects.forEach((project: Project) => this.projects.push(project))
    }

    getProjects() {
        return this.projects;
    }

    getNbReposFromGithub(): Observable<string[]> {
        return this.http.get<string[]>(this.url);
    }
}