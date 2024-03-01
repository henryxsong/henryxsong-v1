import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    {
        path: '', 
        title: 'Henry Song',
        component: MainComponent
    }, // Default route

    {
        path: '**', 
        title: 'Page Not Found',
        component: PageNotFoundComponent
    }, // Wildcard route for a 404 page
];
