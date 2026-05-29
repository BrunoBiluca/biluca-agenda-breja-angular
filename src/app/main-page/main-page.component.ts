import { Component, OnInit, inject } from '@angular/core';
import { BreweriesComponent } from './breweries/breweries.component';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { HlmIcon } from '@ui/icon/src';
import { lucideLogOut } from '@ng-icons/lucide';
import { AuthService } from 'src/auth/services/auth.service';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  imports: [BreweriesComponent, NgIcon, HlmIcon, RouterOutlet],
  providers: [provideIcons({ lucideLogOut })],
})
export class MainPageComponent implements OnInit {
  private readonly _authService = inject(AuthService);
  private _router = inject(Router);

  ngOnInit() {
    this.getLoggedUser();
  }

  getLoggedUser() {
    return this._authService.getLoggedUser();
  }

  logout() {
    this._authService.logout();
    this._router.navigate(['/login']);
  }
}
