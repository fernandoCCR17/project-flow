import { Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";
import { AuthLayoutComponent } from "./layout/auth-layout/auth-layout.component";

const AuthRoutes: Routes = [
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {
                path:'login',
                title: 'Iniciar Sesión',
                component: LoginComponent
            },
            {
                path:'sign-up',
                title: 'Crear Cuenta',
                loadComponent: () => import('./pages/sign-up/sign-up.component').then(m => m.SignUpComponent)
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/login'
    }
];

export default AuthRoutes;