import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarMenuComponent } from '../sidebar-menu/sidebar-menu.component';
import { MapaComponent } from '../mapa/mapa.component';

@Component({
  selector: 'app-main-page',
  imports: [RouterOutlet, SidebarMenuComponent, MapaComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
