import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { GalleryComponent } from '../components/gallery/gallery.component';
import { ServicesComponent } from '../components/services/services.component';
import { MainComponent } from '../components/main/main.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: 'main', pathMatch: 'full'},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'main', component: MainComponent},
];
