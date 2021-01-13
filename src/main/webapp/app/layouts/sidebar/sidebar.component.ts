import { Component, OnInit } from '@angular/core';
import { VERSION } from 'app/app.constants';
import { LoginService } from 'app/core/login/login.service';
import { AccountService } from 'app/core/auth/account.service';
import { LoginModalService } from 'app/core/login/login-modal.service';
import { ProfileService } from 'app/layouts/profiles/profile.service';
import { Router } from '@angular/router';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

@Component({
  moduleId: module.id,
  selector: 'jhi-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.scss'],
})
export class SidebarComponent implements OnInit {
  public menuItems: any[] | undefined;
  version: String;
  inProduction?: boolean;
  isNavbarCollapsed = false;
  swaggerEnabled?: boolean;

  constructor(
    private loginService: LoginService,
    private accountService: AccountService,
    private loginModalService: LoginModalService,
    private profileService: ProfileService,
    private router: Router
  ) {
    this.version = VERSION ? (VERSION.toLowerCase().startsWith('v') ? VERSION : 'v' + VERSION) : '';
  }

  ngOnInit(): void {
    this.profileService.getProfileInfo().subscribe(profileInfo => {
      this.inProduction = profileInfo.inProduction;
      this.swaggerEnabled = profileInfo.swaggerEnabled;
    });
  }

  collapseNavbar(): void {
    this.isNavbarCollapsed = true;
  }

  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }

  login(): void {
    this.loginModalService.open();
  }

  logout(): void {
    this.collapseNavbar();
    this.loginService.logout();
    this.router.navigate(['']);
  }

  toggleNavbar(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  getImageUrl(): string {
    return this.isAuthenticated() ? this.accountService.getImageUrl() : '';
  }
}
