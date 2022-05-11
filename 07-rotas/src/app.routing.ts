import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";


import { HomeComponent } from "./app/home/home.component";
import { LoginComponent } from "./app/login/login.component";
import { CursosComponent } from "./app/cursos/cursos.component";

const APP_ROUTES: Routes = [
  { path: 'cursos', component: CursosComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);