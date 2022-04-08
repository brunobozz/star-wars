import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { PeoplesComponent } from './modules/peoples/peoples.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'peoples', component: PeoplesComponent },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
