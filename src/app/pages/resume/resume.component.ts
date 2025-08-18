import { Component, Input } from '@angular/core';
import { Resumes } from '../../models/resumes';
import { ResumesService } from '../../services/resumes/resumes.service';
import { DeviceService } from '../../services/device/device.service';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {

  @Input() isMobile: boolean = false;

  public showCertifications:boolean = true;
  public showEducations:boolean = true;
  public showExperiences:boolean = true;

  public certifications: Resumes = { list: [] };
  public educations: Resumes = { list: [] }
  public experiences: Resumes = { list: [] };

  constructor(resumesService: ResumesService) {
    this.certifications = resumesService.getCertifications();
    this.educations = resumesService.getEducations();
    this.experiences = resumesService.getExperiences();

    if(this.isMobile){
      this.showCertifications = false;
      this.showEducations = false;
      this.showExperiences = false;
    }
  }

  public toggleCertifications() {
    this.showCertifications = !this.showCertifications;
  }

  public toggleEducations() {
    this.showEducations = !this.showEducations;
  }

  public toggleExperiences() {
    this.showExperiences = !this.showExperiences;
  }

}
