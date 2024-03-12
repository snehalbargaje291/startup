import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StartupComponent } from './Mycomponent/startup/startup.component';
import {FooterComponent} from './Mycomponent/footer/footer.component';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterLink, RouterLinkActive, RouterOutlet, FooterComponent, StartupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'startupidea';
}
