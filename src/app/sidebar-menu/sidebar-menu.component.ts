import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar-menu',
  imports: [CommonModule],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.css'
})

export class SidebarMenuComponent implements OnInit {
  menuColapsado: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // Verificar si hay una preferencia guardada en localStorage
    const estadoGuardado = localStorage.getItem('menuColapsado');
    if (estadoGuardado) {
      this.menuColapsado = estadoGuardado === 'true';
    }
  }

  toggleMenu(): void {
    this.menuColapsado = !this.menuColapsado;
    // Guardar preferencia de usuario
    localStorage.setItem('menuColapsado', this.menuColapsado.toString());
  }
}