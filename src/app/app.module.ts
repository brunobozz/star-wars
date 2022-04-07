import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

//COMPONENTS
import { CompMainMenuComponent } from './components/comp-main-menu/comp-main-menu.component';
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [AppComponent, CompMainMenuComponent],
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
