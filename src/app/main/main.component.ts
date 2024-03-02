import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocialsComponent } from '../socials/socials.component';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { EducationComponent } from '../education/education.component';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    SocialsComponent,
    CommonModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  OS_REGEX = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  isMobile : boolean | null;

  constructor(private router: Router) { 
    this.isMobile = this.OS_REGEX.test(navigator.userAgent);
    document.addEventListener('mousemove', this.onMouseMove);
  }

  onMouseMove(event: MouseEvent){
    const spotlight = document.querySelector('.spotlight')! as HTMLElement;
    spotlight.style.left = event.clientX + 'px';
    spotlight.style.top = event.clientY + 'px';
  }
}
