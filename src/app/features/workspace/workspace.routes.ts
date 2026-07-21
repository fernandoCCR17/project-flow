import { Routes } from "@angular/router";
import { DashboardPageComponent } from "./dashboard/pages/dashboard-page/dashboard-page.component";

const routesWorkspace: Routes = [
    {
        path: 'dashboard',
        component: DashboardPageComponent
    }
];

export default routesWorkspace;