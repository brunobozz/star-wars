import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PeoplesComponent } from './peoples.component';

@NgModule({
  declarations: [PeoplesComponent],
  imports: [CommonModule, HttpClientModule],
})
export class PeoplesModule {}
