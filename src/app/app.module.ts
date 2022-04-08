import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

//MODULES
import { HomeModule } from './modules/home/home.module';
import { PeoplesModule } from './modules/peoples/peoples.module';

//COMPONENTS
import { CompMainMenuComponent } from './components/comp-main-menu/comp-main-menu.component';
import { CompMainSidebarComponent } from './components/comp-main-sidebar/comp-main-sidebar.component';
import { CompMainNavbarComponent } from './components/comp-main-navbar/comp-main-navbar.component';
import { CompMainFooterComponent } from './components/comp-main-footer/comp-main-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CompMainMenuComponent,
    CompMainSidebarComponent,
    CompMainNavbarComponent,
    CompMainFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      maxOpened: 2,
      autoDismiss: true,
    }),

    HomeModule,
    PeoplesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
