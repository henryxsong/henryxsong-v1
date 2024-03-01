import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    {path: '', component: MainComponent}, // Default route
    {path: '**', component: PageNotFoundComponent} // Wildcard route for a 404 page
];
