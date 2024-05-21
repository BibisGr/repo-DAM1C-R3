import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MiguelComponent } from './components/miguel/miguel.component';


export const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'navbar', component: NavbarComponent},
    {path: 'miguel', component: MiguelComponent},
    //las rutas deben agregarse a partir de aqui








    //esta es la ultima ruta
    { path: '**', component: PageNotFoundComponent }, 
];
