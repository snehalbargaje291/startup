import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-last3',
  standalone: true,
  imports: [Last3Component, RouterLinkActive, RouterLink, RouterModule, RouterOutlet],
  templateUrl: './last3.component.html',
  styleUrl: './last3.component.css'
})
export class Last3Component {

}
