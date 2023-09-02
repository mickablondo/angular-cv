import { Injectable } from '@angular/core';
import { Formation } from '../models/formation';
import JSONProject from '../../../assets/formations.json';

@Injectable({
    providedIn: 'root'
})
export class FormationService {
    formations : Formation[] = [];

    constructor() {
        this.getFormationsFromFile();
    }

    getFormationsFromFile() {
        JSONProject.formations.forEach((formation: Formation) => this.formations.push(formation))
    }
}