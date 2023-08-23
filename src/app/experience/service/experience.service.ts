import { Injectable } from '@angular/core';
import { Experience } from '../models/experience';
import JSONExperience from '../../../assets/experiences.json';

@Injectable({
    providedIn: 'root'
})
export class ExperienceService {
    experiences : Experience[] = [];

    constructor() {
        this.getExperiencesFromFile();
    }

    getExperiencesFromFile() {
        JSONExperience.experiences.forEach((experience: Experience) => this.experiences.push(experience))
    }
}