import { Routes } from "@angular/router";
import { FotitosComponent } from "./fotitos/fotitos.component";
import { HomeComponent } from "./home/home.component";
export const appRoutes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" }, // Redirige al home al cargar
    { path: "home", component: HomeComponent }, // Carga AppComponent en home
    { path: "fotitos", component: FotitosComponent } // Carga FotitosComponent en /fotitos
];
