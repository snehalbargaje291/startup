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
import { CartComponent } from './Mycomponent/cart/cart.component';
import { Services1Component } from './Mycomponent/services1/services1.component';
import { ServicesComponent } from './Mycomponent/services/services.component';
import { Last3Component } from './Mycomponent/last3/last3.component';
import { Slider1Component } from './Mycomponent/slider1/slider1.component';
import { NewarrivalComponent } from './Mycomponent/newarrival/newarrival.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterLink, RouterLinkActive, RouterOutlet,NewarrivalComponent, Slider1Component, Last3Component , ServicesComponent, Services1Component, CartComponent, ProductComponent, AccountComponent, StartupComponent, HomepageComponent, LoginComponent, SignupComponent, FooterComponent, SelleraddComponent, SelleregComponent, CheckoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'startupidea';
}
