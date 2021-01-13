import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { UIdesignchangesSharedModule } from 'app/shared/shared.module';
import { UIdesignchangesCoreModule } from 'app/core/core.module';
import { UIdesignchangesAppRoutingModule } from './app-routing.module';
import { UIdesignchangesHomeModule } from './home/home.module';
import { UIdesignchangesEntityModule } from './entities/entity.module';
import { SidebarComponent } from 'app/layouts/sidebar/sidebar.component';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    UIdesignchangesSharedModule,
    UIdesignchangesCoreModule,
    UIdesignchangesHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    UIdesignchangesEntityModule,
    UIdesignchangesAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent, SidebarComponent],
  bootstrap: [MainComponent],
})
export class UIdesignchangesAppModule {}
