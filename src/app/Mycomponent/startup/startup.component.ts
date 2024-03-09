import { Component } from '@angular/core';
import { MyserviceService } from '../../myservice.service';
import { Router, RouterOutlet, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { log } from 'console';

@Component({
  selector: 'app-startup',
  standalone: true,
  imports:[RouterOutlet, RouterModule, CommonModule],
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.css']
})
export class StartupComponent {
  constructor(public myservice: MyserviceService, private router: Router) {}

  displayTextAbout = 'Services';
  initialRouterLinkAbout = './services';
  
  changeToContact() {
    this.displayTextAbout = 'Contact';
    this.initialRouterLinkAbout = './contact';
  }
  
  resetTextAndRouterLink() {
    this.displayTextAbout = 'Services';
    this.initialRouterLinkAbout = './services';
  }

  logout(){
    console.log("Logging out...");
    this.myservice.logoutUser();
  }
}
