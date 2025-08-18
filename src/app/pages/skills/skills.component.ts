import { Component, Input } from '@angular/core';
import { SkillsService } from '../../services/skills/skills.service';
import { Skill, Skills } from '../../models/skills';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';

@Component({
  selector: 'app-skills',
  imports: [ ],
  providers: [ CommonModule ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  @Input() isMobile: boolean = false;

  interval:number = 5000;
  showProficiency:boolean = false;
  
  skills: Skills = { list: [] };

  tags:Set<string>;
  selectedTags:string[] = [];
  
  intervalId: any;
  _skills: Skill[];
  size:number = 4;
  page:number;
  pages:number[];

  constructor(public skillsService:SkillsService) {
    let skills = skillsService.getSkills();
    
    if( this.isMobile ){
      this.size = 1;
      this.interval = 10000;
    }

    this.page = 1;
    this.skills = skills;
    this._skills = skills.list.slice(0, this.size);
    this.tags = new Set(this.skills.list.flatMap(skill => skill.tags || []));
    this.pages = this.calculatePages();

    this.startInterval();
  }

  private calculatePages():number[]{ 
    return Array.from({ length: Math.ceil(this.skills.list.length / this.size) }, (_, i) => i + 1);
  }

  private startInterval(){
    this.intervalId = setInterval(() => this.autochange(), this.interval);
  }

  private stopInterval(){
    clearInterval(this.intervalId);
  }

  autochange(){
    this.page++;
    if(this.page > this.pages.length){
      this.page = 1;
    }
    this.changePage(this.page);
  }

  changePage(page: number) {
    this.stopInterval();
    this.page = page;
    this._skills = this.skills.list.slice((this.page - 1) * this.size, this.page * this.size);
    this.startInterval();
  }

  filter(tag:string){
    if( this.selectedTags.includes(tag) ){
      this.selectedTags = this.selectedTags.filter(t => t !== tag);
      this.reset();
      return;
    }

    this.stopInterval();
    this.selectedTags.push(tag);
    this._skills = this.skills.list.filter(skill =>
      this.selectedTags.every(tag => skill.tags?.includes(tag))
    );
  }

  reset(){
    this.selectedTags = []
    this._skills = this.skills.list.slice(0, this.size);
    this.startInterval();
  }

}