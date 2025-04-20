import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { SidebarMenuComponent } from './Frontend/sidebar-menu/sidebar-menu.component';

export const routes: Routes = [
	{ path: '', component: MainPageComponent},
	{ path: 'regresar', component: MainPageComponent},
    { path: 'sidebar-menu', component: SidebarMenuComponent},
	{ path: '**', redirectTo: '' }
];