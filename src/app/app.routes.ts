import { Routes } from '@angular/router';
import { appGuard } from './app.guard';

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
        path: "workspace",
        canActivate: [appGuard],
        loadChildren: () => import("./features/workspace/workspace.routes")
    },
    {
        path: "**",
        redirectTo: ""
    }
];
