import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        title: "Bienvenido",
        loadChildren: () => import("./features/public/public.routes")
    },
    {
        path: "auth",
        loadChildren: () => import("./features/auth/auth.routes")
    },
    {
        path: "**",
        redirectTo: ""
    }
];
