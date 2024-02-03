import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-startup',
  standalone: true,
  imports: [StartupComponent,RouterModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './startup.component.html',
  styleUrl: './startup.component.css'
})
export class StartupComponent {

}
