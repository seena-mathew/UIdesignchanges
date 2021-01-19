import { Component, OnInit } from '@angular/core';
import { VERSION } from 'app/app.constants';
import { LoginService } from 'app/core/login/login.service';
import { AccountService } from 'app/core/auth/account.service';
import { LoginModalService } from 'app/core/login/login-modal.service';
import { ProfileService } from 'app/layouts/profiles/profile.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'jhi-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.scss'],
})
export class SidebarComponent implements OnInit {
  version: String;
  inProduction?: boolean;
  isSubMenuCollapsed = false;
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

  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }

  login(): void {
    this.loginModalService.open();
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['']);
  }

  getImageUrl(): string {
    return this.isAuthenticated() ? this.accountService.getImageUrl() : '';
  }

  collapseSubMenu(): void {
    this.isSubMenuCollapsed = !this.isSubMenuCollapsed;
  }
}
