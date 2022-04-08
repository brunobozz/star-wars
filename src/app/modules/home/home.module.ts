import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CompPhraseBannerComponent } from 'src/app/components/comp-phrase-banner/comp-phrase-banner.component';
import { CompParalBannerComponent } from './components/comp-paral-banner/comp-paral-banner.component';

@NgModule({
  declarations: [
    HomeComponent,
    CompParalBannerComponent,
    CompPhraseBannerComponent,
  ],
  imports: [CommonModule],
})
export class HomeModule {}
