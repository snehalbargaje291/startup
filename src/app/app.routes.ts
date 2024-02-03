import { Routes } from '@angular/router';
import { LoginComponent } from './Mycomponent/login/login.component';
import { SignupComponent } from './Mycomponent/signup/signup.component';
import { SelleregComponent } from './Mycomponent/sellereg/sellereg.component';
import { SelleraddComponent } from './Mycomponent/selleradd/selleradd.component';
import { HomepageComponent } from './Mycomponent/homepage/homepage.component';
import { AccountComponent } from './Mycomponent/account/account.component';
import { AboutComponent } from './Mycomponent/about/about.component';
import { ContactComponent } from './Mycomponent/contact/contact.component';
import { CheckoutComponent } from './Mycomponent/checkout/checkout.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "contact",
        component: ContactComponent
    },
    {
        path: "account",
        component: AccountComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "signup",
        component: SignupComponent
    },
    {
        path:"",
        component: HomepageComponent
    },
    {
        path:"sellereg",
        component: SelleregComponent
    },
    {
        path:"checkout",
        component: CheckoutComponent
    },
    {
        path: "selleradd",
        component: SelleraddComponent
    },
];
