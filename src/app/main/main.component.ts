import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocialsComponent } from '../socials/socials.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    SocialsComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(private router: Router) { 
    document.addEventListener('mousemove', this.onMouseMove);
  }

  onMouseMove(event: MouseEvent){
    const spotlight = document.querySelector('.spotlight')! as HTMLElement;
    spotlight.style.left = event.clientX + 'px';
    spotlight.style.top = event.clientY + 'px';

  }
}
