import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { ButtonModule } from 'primeng/button';
import { NavComponent } from './components/home/nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, ButtonModule, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cryptoTracker';
}
