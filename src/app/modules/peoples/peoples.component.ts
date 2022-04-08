import { Component, OnInit } from '@angular/core';
import { ServSwapiApiService } from 'src/app/services/serv-swapi-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './peoples.component.html',
})
export class PeoplesComponent implements OnInit {
  public peoples: any = [];

  constructor(private swapiApi: ServSwapiApiService) {}

  ngOnInit(): void {
    this.getPeoples();
  }

  private getPeoples() {
    this.swapiApi.getData('people').subscribe((res: any) => {
      this.peoples = res.results;
      console.log(res);
      this.loadNext(res.next);
    });
  }

  public loadNext(url: string) {
    this.swapiApi.getUrl(url).subscribe((res: any) => {
      console.log(res);
      this.peoples = this.peoples.concat(res.results);
      if (res.next) {
        this.loadNext(res.next);
      }
    });
  }
}
