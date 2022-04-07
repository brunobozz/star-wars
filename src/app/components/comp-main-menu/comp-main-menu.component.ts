import { Component, OnInit } from '@angular/core';
import { ServSwapiApiService } from 'src/app/services/serv-swapi-api.service';

@Component({
  selector: 'app-comp-main-menu',
  templateUrl: './comp-main-menu.component.html',
  styleUrls: ['./comp-main-menu.component.scss'],
})
export class CompMainMenuComponent implements OnInit {
  public menuList: any = [
    { name: 'Home', link: 'home', icon: 'fa-home' },
    { name: 'Peoples', link: 'people', icon: 'fa-user' },
    { name: 'Films', link: 'films', icon: 'fa-film' },
  ];

  constructor(private servSwapiApi: ServSwapiApiService) {}

  ngOnInit(): void {
  }

  // private getEndpoints() {
  //   this.servSwapiApi.getData('').subscribe((res: any) => {
  //     this.menuList = res;
  //     console.log(res);
  //   });
  // }
}
