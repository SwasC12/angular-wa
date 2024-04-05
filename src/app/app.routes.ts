import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { AboutPage } from './pages/about/about.page';
import { PracticePage } from './pages/practice/practice.page';

export const routes: Routes = [

    { path: '', component: HomePage },
    { path: 'home', component: HomePage },
    { path: 'about', component: AboutPage },
    { path: 'practice', component: PracticePage},

];
