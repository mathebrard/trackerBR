import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, MenubarModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',
      },
      {
        label: 'Products',
        icon: 'pi pi-box',
        items: [
          { label: 'New', icon: 'pi pi-plus', routerLink: '/products/new' },
          { label: 'List', icon: 'pi pi-list', routerLink: '/products' },
        ],
      },
      {
        label: 'About',
        icon: 'pi pi-info-circle',
        routerLink: '/about',
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        routerLink: '/contact',
      },
    ];
  }
}
