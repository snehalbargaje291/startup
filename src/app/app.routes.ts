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
import { ProductComponent } from './Mycomponent/product/product.component';
import { CartComponent } from './Mycomponent/cart/cart.component';
import { Services1Component } from './Mycomponent/services1/services1.component';
import { ServicesComponent } from './Mycomponent/services/services.component';
import { ProductdetailsComponent } from './Mycomponent/productdetails/productdetails.component';
import { WishlistComponent } from './Mycomponent/wishlist/wishlist.component';
import { ErrorComponent } from './Mycomponent/error/error.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "wishlist",
        component: WishlistComponent
    },
    {
        path: "productdetail",
        component: ProductdetailsComponent
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
        path: "error",
        component: ErrorComponent
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
    {
        path: "product",
        component: ProductComponent
    },
    {
        path: "cart",
        component: CartComponent
    },
    {
        path: "services1",
        component: Services1Component
    },
    {
        path: "services",
        component: ServicesComponent
    },
];
