import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StartupComponent } from './Mycomponent/startup/startup.component';
import {FooterComponent} from './Mycomponent/footer/footer.component';
import {LoginComponent} from './Mycomponent/login/login.component';
import {SignupComponent} from './Mycomponent/signup/signup.component';
import {SelleregComponent} from './Mycomponent/sellereg/sellereg.component';
import {SelleraddComponent} from './Mycomponent/selleradd/selleradd.component';
import { HomepageComponent } from './Mycomponent/homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { AccountComponent } from './Mycomponent/account/account.component';
import { CheckoutComponent } from './Mycomponent/checkout/checkout.component';
import { ProductComponent } from './Mycomponent/product/product.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterLink, RouterLinkActive, RouterOutlet, ProductComponent, AccountComponent, StartupComponent, HomepageComponent, LoginComponent, SignupComponent, FooterComponent, SelleraddComponent, SelleregComponent, CheckoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'startupidea';
}
