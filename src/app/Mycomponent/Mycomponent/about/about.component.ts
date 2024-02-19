import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Last3Component } from '../last3/last3.component';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutComponent,Last3Component ,RouterModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
