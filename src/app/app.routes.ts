import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
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
