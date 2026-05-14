import { Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";

const AuthRoutes: Routes = [
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'sign-up',
        component: SignUpComponent
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];

export default AuthRoutes;