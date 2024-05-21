import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {FooterYadyComponent} from "./components/footer-yady/footer-yady.component";


export const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'navbar', component: NavbarComponent},
    //las rutas deben agregarse a partir de aqui
  {
    path: 'Yady', component: FooterYadyComponent
  },
  {path: 'yady' ,component:FooterYadyComponent },







    //esta es la ultima ruta
    { path: '**', component: PageNotFoundComponent },
];
