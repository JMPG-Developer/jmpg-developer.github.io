import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {

  experience:number;
  projects:number;
  hours:number;
  clients:number;

  _experience:number = 0;
  _projects:number = 0;
  _hours:number = 0;
  _clients:number = 0;

  constructor() { 
    this.experience = this.calculateExperience();
    this.projects = this.calculateProjects();
    this.hours = this.calculateHours();
    this.clients = this.calculateClients();
  }

  private calculateExperience(): number {
    const year = 2010;
    const currentYear = new Date().getFullYear();
    return (currentYear - year);
  }

  private calculateProjects(): number {
    const experience = this.experience;
    const projectsByYear = 2.5;
    return Math.round(experience * projectsByYear);
  }

  private calculateHours(): number {
    const experience = this.experience;
    const weeks = 52;
    const hoursByWeek = 2 * 5;
    return Math.round(experience * weeks * hoursByWeek);
  }

  private calculateClients(): number {
    const projects = this.projects;
    const clientsByProject = 0.75;
    return Math.round(projects * clientsByProject);
  }

  ngOnInit() {
    this.animateValue('experience', 0, this.experience, 2000);
    this.animateValue('projects', 0, this.projects, 2000);
    this.animateValue('hours', 0, this.hours, 2000);
    this.animateValue('clients', 0, this.clients, 2000);
  }

  private animateValue(property: 'experience' | 'projects' | 'hours' | 'clients', start: number, end: number, duration: number) {
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    let current = start;
    const timer = setInterval(() => {
      current += increment;
      this[`_${property}`] = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, stepTime);
  }

}
