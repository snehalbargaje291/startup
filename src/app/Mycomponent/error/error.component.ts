import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [RouterOutlet, RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {

}
