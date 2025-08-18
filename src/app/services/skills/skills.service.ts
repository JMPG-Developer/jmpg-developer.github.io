import { Injectable } from '@angular/core';
import { skills, Skills } from '../../models/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() {}

  public getSkills(): Skills {
    return skills;
  }

}