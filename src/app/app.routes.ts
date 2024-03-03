import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SocialsComponent } from './socials/socials.component';

export const routes: Routes = [
    {
        path: '', 
        title: 'Henry Song',
        component: MainComponent
    }, // Default route

    {
        path: '#about', 
        title: 'About Me',
        component: AboutComponent
    }, // about route
    {
        path: '#education', 
        title: 'Education',
        component: EducationComponent
    }, // education route

    {
        path: '#experience', 
        title: 'Experience',
        component: ExperienceComponent
    }, //Experience route

    {
        path: '#socials', 
        title: 'Socials',
        component: SocialsComponent
    }, // Socials route

    {
        path: '**', 
        title: 'Page Not Found',
        component: PageNotFoundComponent
    }, // Wildcard route for a 404 page
];
