import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CompParalBannerComponent } from './components/comp-paral-banner/comp-paral-banner.component';
import { CompInfoBannerComponent } from './components/comp-info-banner/comp-info-banner.component';

@NgModule({
  declarations: [
    HomeComponent,
    CompParalBannerComponent,
    CompInfoBannerComponent,
  ],
  imports: [CommonModule],
})
export class HomeModule {}
