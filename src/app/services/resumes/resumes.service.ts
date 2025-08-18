import { Injectable } from '@angular/core';
import { certifications, educations, experiences, Resumes } from '../../models/resumes';

@Injectable({
  providedIn: 'root'
})
export class ResumesService {

  constructor() {}

  public getCertifications(): Resumes {
    return certifications;
  }

  public getEducations(): Resumes {
    return educations;
  }

  public getExperiences(): Resumes {
    return experiences;
  } 
  
}
